package vn.project.service.order;

import vn.project.dto.request.OrderInput;
import vn.project.entity.Order;
import vn.project.entity.User;

import java.util.List;
import java.util.Optional;

public interface IOrderService {
    public List<Order> findAll();
    public List<Order> findByOrderPhoneNumber(String orderPhoneNumber);
    public List<Order> findByUser();
    public Optional<Order> findById(Integer orderId);
    public void save(OrderInput orderInput);
    public Boolean exitstsById(Integer orderId);
    public void deleteById(Integer orderId);
}
