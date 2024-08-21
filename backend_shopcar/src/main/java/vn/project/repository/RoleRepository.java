package vn.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.project.entity.Role;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role, String> {
    public List<Role> findByRoleName(String key);
}
