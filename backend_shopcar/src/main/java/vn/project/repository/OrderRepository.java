package vn.project.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.project.entity.Order;
import vn.project.entity.User;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    public List<Order> findByOrderPhoneNumber(String orderPhoneNumber);
    public List<Order> findByUser(User user);
}
