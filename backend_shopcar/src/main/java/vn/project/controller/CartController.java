package vn.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vn.project.dto.response.ResponseObject;
import vn.project.entity.Cart;
import vn.project.repository.CartRepository;
import vn.project.service.cart.CartService;
import vn.project.service.cart.ICartService;

import java.util.Optional;

@RestController
@RequestMapping(path = "/cart")
public class CartController {
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartService cartService;

    @GetMapping("")
//    @PreAuthorize("hasRole('User')")
    ResponseEntity<ResponseObject> getAllCart(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Thành công", "Thành công", cartService.getCart())
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("Lỗi", "Thất bại", "")
            );
        }
    }

    @GetMapping("/{cartId}")
//    @PreAuthorize("hasRole('User')")
    ResponseEntity<ResponseObject> getByid(@PathVariable int cartId){
        Optional<Cart> foundCart = cartService.findById(cartId);
        if (foundCart.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Ok", "Giỏ hàng theo Id của bạn là: ", foundCart)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Thất bại", "Không tìm thấy giỏ hàng có id là: " + cartId, "")
            );
        }
    }

    @GetMapping("/{carId}/{quantity}")
    ResponseEntity<ResponseObject> addToCart(@PathVariable int carId, @PathVariable int quantity){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Ok", "Giỏ hàng theo Id của bạn là: ", cartService.addToCart(carId,quantity))
        );
    }

    @PutMapping("/{cartId}/{carId}/{quantity}/{totalAmount}")
    ResponseEntity<ResponseObject> updateCart(
            @PathVariable(name = "cartId") int cartId,
            @PathVariable(name = "carId") int carId,
            @PathVariable(name = "quantity") int quantity,
            @PathVariable(name = "totalAmount") int totalAmount) {
     return ResponseEntity.status(HttpStatus.OK).body(
             new ResponseObject("Thành công", "Cập nhật thành công", cartService.updateToCart(cartId,carId,quantity,totalAmount))
     );
    }

    @DeleteMapping("/{cartId}")
    ResponseEntity<ResponseObject> deleteCart(@PathVariable int cartId){
        boolean exits = cartService.existsById(cartId);
        if (exits){
            cartService.deleteById(cartId);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Thành công", "Chức năng xóa sản phẩm trong giỏ hàng thành công", "Đã xóa!!!")
            );
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Thất bại", "Không tìm thấy giỏ hàng có Id là:" + cartId, "")
        );
    }

    @PutMapping("/{cartId}/{type}")
    ResponseEntity<ResponseObject> updateQuantity(@PathVariable(name = "cartId") Integer cartId, @PathVariable(name = "type") String type){
        cartService.updateQuantity(cartId, type);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Thành công", "Cập nhật số lượng sản phẩm trong giỏ hàng thành công", "")
        );
    }
}
