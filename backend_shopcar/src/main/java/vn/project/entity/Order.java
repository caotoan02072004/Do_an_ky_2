package vn.project.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderId")
    private int orderId;

    @Column(name = "OrderFullName")
    private String orderFullName;

    @Column(name = "OrderAddress")
    private String orderAddress;

    @Column(name = "OrderPhoneNumber ")
    private String orderPhoneNumber ;

    @Column(name = "OrderDate")
    private Date orderDate;

    @Column(name = "OrderPaymentMethods")
    private String orderPaymentMethods;

    @Column(name = "OrderStatus")
    private int orderStatus;

    @Column(name = "OrderAmount")
    private double orderAmount;

    @Column(name = "OrderNote")
    private String orderNote;

    @OneToOne
    private User user;

    public Order() {
    }

    public Order(String orderFullName, String orderAddress, String orderPhoneNumber, Date orderDate, String orderPaymentMethods, int orderStatus, double orderAmount, String orderNote, User user) {
        this.orderFullName = orderFullName;
        this.orderAddress = orderAddress;
        this.orderPhoneNumber = orderPhoneNumber;
        this.orderDate = orderDate;
        this.orderPaymentMethods = orderPaymentMethods;
        this.orderStatus = orderStatus;
        this.orderAmount = orderAmount;
        this.orderNote = orderNote;
        this.user = user;
    }

    public Order(int orderId, String orderFullName, String orderAddress, String orderPhoneNumber, Date orderDate, String orderPaymentMethods, int orderStatus, double orderAmount, String orderNote, User user) {
        this.orderId = orderId;
        this.orderFullName = orderFullName;
        this.orderAddress = orderAddress;
        this.orderPhoneNumber = orderPhoneNumber;
        this.orderDate = orderDate;
        this.orderPaymentMethods = orderPaymentMethods;
        this.orderStatus = orderStatus;
        this.orderAmount = orderAmount;
        this.orderNote = orderNote;
        this.user = user;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getOrderFullName() {
        return orderFullName;
    }

    public void setOrderFullName(String orderFullName) {
        this.orderFullName = orderFullName;
    }

    public String getOrderAddress() {
        return orderAddress;
    }

    public void setOrderAddress(String orderAddress) {
        this.orderAddress = orderAddress;
    }

    public String getOrderPhoneNumber() {
        return orderPhoneNumber;
    }

    public void setOrderPhoneNumber(String orderPhoneNumber) {
        this.orderPhoneNumber = orderPhoneNumber;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getOrderPaymentMethods() {
        return orderPaymentMethods;
    }

    public void setOrderPaymentMethods(String orderPaymentMethods) {
        this.orderPaymentMethods = orderPaymentMethods;
    }

    public int getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(int orderStatus) {
        this.orderStatus = orderStatus;
    }

    public double getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(double orderAmount) {
        this.orderAmount = orderAmount;
    }

    public String getOrderNote() {
        return orderNote;
    }

    public void setOrderNote(String orderNote) {
        this.orderNote = orderNote;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
