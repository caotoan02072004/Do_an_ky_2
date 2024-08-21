package vn.project.service.user;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import vn.project.dto.request.SignInForm;
import vn.project.dto.response.JwtResponse;
import vn.project.repository.RoleRepository;
import vn.project.repository.UserRepository;
import vn.project.entity.Role;
import vn.project.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private RoleRepository roleRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;


    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleRepo.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role");
        roleRepo.save(userRole);

        User adminUser = new User();
        adminUser.setUserName("admin");
        adminUser.setUserPassword(getEncodedPassword("111111"));
        adminUser.setUserEmail("admin@gmail.com");
        adminUser.setUserFullName("admin");
        adminUser.setUserAvatar("http://res.cloudinary.com/dxo2y5smg/image/upload/v1716198120/avatar/pirrqd5mdvaxzhjbycuf.jpg");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userRepo.save(adminUser);

        User user = new User();
        user.setUserName("user");
        user.setUserPassword(getEncodedPassword("111111"));
        user.setUserEmail("user@gmail.com");
        user.setUserFullName("user");
        user.setUserAvatar("http://res.cloudinary.com/dxo2y5smg/image/upload/v1716198187/avatar/vxvicb01hlho7w3iufpi.webp");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(userRole);
        user.setRole(userRoles);
        userRepo.save(user);
    }

    public User save(User user, String roleInput) {
        Role role = roleRepo.findById(roleInput).get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userRepo.save(user);
    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    public JwtResponse login(@RequestBody SignInForm jwtRequest) throws Exception {
        return jwtService.createJwtToken(jwtRequest);
    }

    public List<User> findAll(){
        return userRepo.findAll();
    }

    public void update(@RequestBody User newUser,
                       @PathVariable String userName,
                       @PathVariable String roleName){
        Role role = new Role();
        role.setRoleName(roleName);
        Set<Role> roles = new HashSet<>();
        roles.add(role);
        User updateUser = userRepo.findById(userName)
                .map(user -> {
                    user.setUserName(newUser.getUserName());
                    user.setUserAvatar(newUser.getUserAvatar());
                    user.setUserFullName(newUser.getUserFullName());
                    user.setUserEmail(newUser.getUserEmail());
                    user.setUserPhoneNumber(newUser.getUserPhoneNumber());
                    user.setUserAddress(newUser.getUserAddress());
                    user.setUserGender(newUser.getUserGender());
                    user.setUserActive(newUser.getUserActive());
                    user.setRole(roles);
                    return userRepo.save(user);
                }).orElseGet(()->{
                    newUser.setUserName(userName);
                    return userRepo.save(newUser);
                });
    }

    public void deleteByUsername(User user) {
        userRepo.delete(user);
    }

    public List<User> findByUserName(String key) {
        return userRepo.findByUserName(key);
    }
    public User findByUsername(String name) {
        return userRepo.findUserByUserName(name);
    }
    public User findById(String userName){
        return userRepo.findById(userName).get();
    }

    public User findOneUser(String key) {
        return userRepo.findUserByUserName(key);
    }

    @Transactional
    public void resetPassword(String username, String newPassword) {
        User user = userRepo.findUserByUserName(username);
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setUserPassword(encodedPassword);
        userRepo.save(user);
    }

    public Boolean existsByEmail(String email) {
        return userRepo.existsByUserEmail(email);
    }

    public Optional<User> findByEmail(String email) {
        return userRepo.findByUserEmail(email);
    }

}
