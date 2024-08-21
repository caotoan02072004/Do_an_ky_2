package vn.project.dto.request;

import javax.persistence.Column;
import java.util.Date;

public class OrderInput {
    private String orderFullName;
    private String orderAddress;
    private String orderPhoneNumber ;
    private Date orderDate;
    private String orderPaymentMethods;
    private int orderStatus;
    private double orderAmount;
    private String orderNote;

    public OrderInput() {
    }

    public OrderInput(String orderFullName, String orderAddress, String orderPhoneNumber, Date orderDate, String orderPaymentMethods, int orderStatus, double orderAmount, String orderNote) {
        this.orderFullName = orderFullName;
        this.orderAddress = orderAddress;
        this.orderPhoneNumber = orderPhoneNumber;
        this.orderDate = orderDate;
        this.orderPaymentMethods = orderPaymentMethods;
        this.orderStatus = orderStatus;
        this.orderAmount = orderAmount;
        this.orderNote = orderNote;
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
}


