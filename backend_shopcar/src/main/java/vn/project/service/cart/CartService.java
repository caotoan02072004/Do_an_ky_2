package vn.project.service.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import vn.project.configuration.JwtRequestFilter;
import vn.project.entity.Car;
import vn.project.entity.Cart;
import vn.project.entity.User;
import vn.project.repository.CarRepository;
import vn.project.repository.CartRepository;
import vn.project.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CartService implements ICartService{
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public List<Cart> getCart() {
        String username = JwtRequestFilter.CURRENT_USER;
        User user = userRepository.findById(username).get();
        return cartRepository.findByUser(user);
    }

    @Override
    public Cart addToCart(@PathVariable Integer carId, @PathVariable Integer quantity) {
        Car car = carRepository.findById(carId).get();
        System.out.println(car);
        String userName = JwtRequestFilter.CURRENT_USER;

        User user = null;
        if (userName != null){
            user = userRepository.findById(userName).get();
        }

        if (car != null && user != null){
            Cart cart = new Cart(quantity, (int) ((car.getCarSalePrice() > 0 ? car.getCarSalePrice() : car.getCarPrice()) * quantity), car, user);
            cartRepository.save(cart);
            return  cart;
        }
        return null;
    }

    @Override
    public Cart updateToCart(Integer cartId, Integer carId, Integer quantity, Integer totalAmount) {
        Car car = carRepository.findById(carId).get();
        String userName = JwtRequestFilter.CURRENT_USER;

        User user = null;
        if (userName != null){
            user = userRepository.findById(userName).get();
        }

        if (car != null && user != null){
            Cart cart = new Cart(cartId, quantity, totalAmount,car, user);
            cartRepository.save(cart);
            return cart;
        }
        return null;
    }

    @Override
    public Optional<Cart> findById(Integer cartId) {
        return cartRepository.findById(cartId);
    }

    @Override
    public boolean existsById(Integer cartId) {
        return cartRepository.existsById(cartId);
    }

    @Override
    public void deleteById(Integer cartId) {
        cartRepository.deleteById(cartId);
    }

    @Override
    public void updateQuantity(Integer cartId , String type) {
        Cart cart = cartRepository.getOne(cartId);
        if (type.equals("cong")){
            cart.setQuantity(cart.getQuantity() + 1);
            cartRepository.save(cart);
            cart.setTotalAmount((int) ((cart.getCar().getCarSalePrice() > 0 ? cart.getCar().getCarSalePrice() : cart.getCar().getCarPrice()) * cart.getQuantity()));
        } else if (type.equals("tru")) {
            cart.setQuantity(cart.getQuantity() > 1 ? cart.getQuantity() - 1 : 1);
            cartRepository.save(cart);
            cart.setTotalAmount((int) ((cart.getCar().getCarSalePrice() > 0 ? cart.getCar().getCarSalePrice() : cart.getCar().getCarPrice()) * cart.getQuantity()));
        } else {
            System.out.println("Lỗiiiiiiii");
        }

        cartRepository.save(cart);
    }
}
