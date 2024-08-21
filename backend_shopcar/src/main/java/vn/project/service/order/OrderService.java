package vn.project.service.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.project.configuration.JwtRequestFilter;
import vn.project.dto.request.OrderInput;
import vn.project.entity.Cart;
import vn.project.entity.Order;
import vn.project.entity.User;
import vn.project.repository.CarRepository;
import vn.project.repository.OrderRepository;
import vn.project.repository.UserRepository;
import vn.project.service.cart.CartService;

import java.util.List;
import java.util.Optional;


@Service
public class OrderService implements IOrderService{

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CartService cartService;

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public List<Order> findByOrderPhoneNumber(String orderPhoneNumber) {
        return orderRepository.findByOrderPhoneNumber(orderPhoneNumber);
    }

    @Override
    public List<Order> findByUser() {
       String userName = JwtRequestFilter.CURRENT_USER;
        User user = userRepository.findById(userName).get();
        return orderRepository.findByUser(user);
    }

    @Override
    public Optional<Order> findById(Integer orderId) {
        return orderRepository.findById(orderId);
    }

    @Override
    public void save(OrderInput orderInput) {
        String currentUser = JwtRequestFilter.CURRENT_USER;
        User user = userRepository.findById(currentUser).get();
        List<Cart> carts = cartService.getCart();
        Order order = new Order(
                orderInput.getOrderFullName(),
                orderInput.getOrderAddress(),
                orderInput.getOrderPhoneNumber(),
                orderInput.getOrderDate(),
                orderInput.getOrderPaymentMethods(),
                orderInput.getOrderStatus(),
                orderInput.getOrderAmount(),
                orderInput.getOrderNote(),

                user
        );
        orderRepository.save(order);

        for (Cart c: carts){
            cartService.deleteById(c.getCartId());
        }
    }


    @Override
    public Boolean exitstsById(Integer orderId) {
        return orderRepository.existsById(orderId);
    }

    @Override
    public void deleteById(Integer orderId) {
        orderRepository.deleteById(orderId);
    }
}
