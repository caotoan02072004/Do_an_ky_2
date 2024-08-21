package vn.project.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.project.entity.Cart;
import vn.project.entity.User;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
    public List<Cart> findByUser(User user);
}
