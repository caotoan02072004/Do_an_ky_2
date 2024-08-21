package vn.project.service.cart;

import vn.project.entity.Cart;

import java.util.List;
import java.util.Optional;

public interface ICartService {
    public List<Cart> getCart();
    public Cart addToCart(Integer carId, Integer quantity);
    public Cart updateToCart(Integer cartId,Integer carId, Integer quantity, Integer totalAmount);
    public Optional<Cart> findById(Integer cartId);
    public boolean existsById(Integer cartId);
    public void deleteById(Integer cartId);
    public void updateQuantity(Integer cartId, String type);
}
