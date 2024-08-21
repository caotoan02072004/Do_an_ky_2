package vn.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import vn.project.entity.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    public List<User> findByUserName(String key);
    public void deleteByUserName(String userName);
    @Query("select u from User u where u.userName = ?1")
    User findUserByUserName(String key);
    Boolean existsByUserEmail(String email);
    Optional<User> findByUserEmail(String email);

}
