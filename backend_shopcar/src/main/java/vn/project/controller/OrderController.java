package vn.project.controller;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vn.project.dto.request.OrderInput;
import vn.project.dto.response.ResponseObject;
import vn.project.entity.Order;
import vn.project.service.cart.CartService;
import vn.project.service.order.IOrderService;
import vn.project.service.order.OrderService;

import javax.validation.constraints.Past;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private CartService cartService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('Admin')")
    ResponseEntity<ResponseObject> findAllByAdmin(@RequestParam(defaultValue = "") String key){
        List<Order> orders = null;
        if (key.equals("")){
            orders = orderService.findAll();
        }else {
            orders = orderService.findByOrderPhoneNumber(key);
            if (orders.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject("Thất bại", "Không tìm thấy thông tin muốn tìm", "")
                );
            }
        }
        if (!orders.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Thành công", "Thồn tin đơn hàng của bạn là: ", orders)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Thất bại", "Không có dữ liệu", "")
            );
        }
    }

    @GetMapping("")
    @PreAuthorize("hasRole('User')")
    ResponseEntity<ResponseObject> findAllByUser(@RequestParam(defaultValue = "") String key){
        List<Order> orders = null;
        if (key.equals("")){
            orders = orderService.findByUser();
        } else {
            orders = orderService.findByOrderPhoneNumber(key);
            if (orders.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject("Thất bại", "Không có dữ liệu đang tìm", "")
                );
            }
        }

        if (!orders.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Thành công", "Dữ liệu của bạn là: " ,orders)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Thất bại", "Không tìm thấy dữ liệu", "")
            );
        }
    }

    @GetMapping("/{orderId}")
    ResponseEntity<ResponseObject> findById(@PathVariable Integer orderId){
        Optional<Order> foundOrder = orderService.findById(orderId);
        if (foundOrder.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Thành công", "Thông tin đặt hàng mang mã số: " + orderId, foundOrder)
            );
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Thất bại", "Không tìm thấy thông tin đặt hàng mà bạn muốn tìm", "")
            );
        }
    }

    @PostMapping("")
    @PreAuthorize("hasRole('User')")
    ResponseEntity<ResponseObject> saveOrder(@RequestBody OrderInput orderInput){
        try {
            orderService.save(orderInput);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Thành công", "Đặt hàng thành công", "")
            );
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("Lỗi", "Thêm mới thất bại", e.getMessage())
            );
        }
    }

    @DeleteMapping("/{orderId}")
    ResponseEntity<ResponseObject> deleteOrder(@PathVariable int orderId){
        boolean exits = orderService.exitstsById(orderId);
        if (exits){
            orderService.deleteById(orderId);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "delete data successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed", "Cannot find data to delete", "")
        );
    }
}
