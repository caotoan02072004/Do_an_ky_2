package vn.project.service.role;

import vn.project.repository.RoleRepository;
import vn.project.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepo;

    public Role createNewRole(Role role) {
        return roleRepo.save(role);
    }
    public List<Role> findAll(){
        return roleRepo.findAll();
    }
    public List<Role> findByRoleName(String key) {
        return roleRepo.findByRoleName(key);
    }
    public void deleteByRoleName(Role role) {
        roleRepo.delete(role);
    }
}
