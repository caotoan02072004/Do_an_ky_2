package vn.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "Carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CartId")
    private int cartId;

    @Column(name = "Quantity")
    private int quantity;

    @Column(name = "TotalAmount")
    private int totalAmount;

    @ManyToOne
    private Car car;

    @ManyToOne
    private User user;

    public Cart() {
    }

    public Cart(int quantity, int totalAmount, Car car, User user) {
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.car = car;
        this.user = user;
    }

    public Cart(int cartId, int quantity, int totalAmount, Car car, User user) {
        this.cartId = cartId;
        this.quantity = quantity;
        this.totalAmount = totalAmount;
        this.car = car;
        this.user = user;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(int totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
