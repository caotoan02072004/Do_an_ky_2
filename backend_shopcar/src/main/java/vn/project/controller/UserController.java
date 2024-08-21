package vn.project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.project.configuration.JwtRequestFilter;
import vn.project.dto.request.ChangePasswordForm;
import vn.project.dto.request.SignInForm;
import vn.project.dto.request.ResetPassword;
import vn.project.entity.User;
import vn.project.dto.response.ResponseObject;
import vn.project.sendEmail.ProvideSendEmail;
import vn.project.service.upload.UploadFileService;
import vn.project.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import vn.project.util.JwtUtil;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    ProvideSendEmail provideSendEmail;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UploadFileService uploadImage;

//    @PostConstruct
//    public void initRoleAndUser() {
//        userService.initRoleAndUser();
//    }

    @PostMapping({"/registerNewUser/{roleInput}"})
    ResponseEntity<ResponseObject> registerNewUser(@RequestBody User user, @PathVariable String roleInput) {
        //check unique
        List<User> foundUser = userService.findByUserName(user.getUserName().trim());
        try {
            if(foundUser.size() > 0){
                return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                        new ResponseObject("error", "username name already taken", "")
                );
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Insert data successfully", userService.save(user, roleInput))
            );
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("failed", e.getMessage(), "")
            );
        }
    }

    @PostMapping({"/login"})
    ResponseEntity<ResponseObject> login(@RequestBody SignInForm jwtRequest){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Insert data successfully", userService.login(jwtRequest))
            );
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("failed", "Login failed", "")
            );
        }
    }

    @PreAuthorize("hasRole('Admin')")
    @GetMapping("/user")
    ResponseEntity<ResponseObject> getAllUser(@RequestParam(defaultValue = "") String key){
        List<User> list = null;
        if (key.equals("")){
            list = userService.findAll();
        }else {
            list = userService.findByUserName(key);
            if(list.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject("failed", "No Data", "")
                );
            }
        }

        if(!list.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Query user successfully", list)
            );
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "No Data", "")
            );
        }
    }

    @PutMapping("/user/{userName}/{roleName}")
    ResponseEntity<ResponseObject> updateUser(@RequestBody User newUser,
                                              @PathVariable String userName,
                                              @PathVariable String roleName
                                             ){
       userService.update(newUser, userName, roleName);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Update data successfuly", "")
        );
    }

    @GetMapping("/user/{userName}")
    ResponseEntity<ResponseObject> findById(@PathVariable String userName){
        Optional<User> foundCategory = Optional.of(userService.findById(userName));
        if(foundCategory.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Query user successfully", foundCategory)
            );
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "cannot find category with id = "+userName, "")
            );
        }
    }

    @PostMapping({"/user/delete"})
    @PreAuthorize("hasRole('Admin')")
    ResponseEntity<ResponseObject> deleteUser(@RequestBody User user){
        userService.deleteByUsername(user);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Delete data successfuly", "userName")
        );
    }

    @PutMapping({"/reset-password/{username}"})
    @PreAuthorize("hasRole('Admin')")
    ResponseEntity<ResponseObject> resetPasswordByAdmin(@PathVariable String username){
        List<User> user = userService.findByUserName(username);
        if(user.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "User not found", "")
            );
        }
        try {
            String newPassword = UUID.randomUUID().toString().substring(0,6);
            userService.resetPassword(username, newPassword);

            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Reset password successfully", newPassword)
            );
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", e.getMessage(), "")
            );
        }
    }

    @PutMapping("/change/password")
    public ResponseEntity<ResponseObject> changePassword(HttpServletRequest request, @Valid @RequestBody ChangePasswordForm changePasswordForm){
        String userName = JwtRequestFilter.CURRENT_USER;
        try {
            User user =  userService.findOneUser(changePasswordForm.getUserName());
            boolean matches = passwordEncoder.matches(changePasswordForm.getCurrentPassword(), user.getUserPassword());
            if(changePasswordForm.getNewPassword() != null){
                if(matches){
                    user.setUserPassword(changePasswordForm.getNewPassword());
                    userService.save(user, "User");
                } else {
                    return ResponseEntity.status(HttpStatus.OK).body(
                            new ResponseObject("failed", "Current password is incorrect", "")
                    );
                }
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Change Password sucesss", "")
            );
        } catch (UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("failed", "Change Password Failed", e.getMessage())
            );
        }
    }

//    @PreAuthorize("hasRole('Admin') and hasRole('User')")
    @PostMapping("/send/email/{email}")
    public ResponseEntity<ResponseObject> sendEmail(@PathVariable String email){
         User user;
        if (userService.existsByEmail(email)){
            user = userService.findByEmail(email).orElseThrow(()->new UsernameNotFoundException("Email Not Found with -> email"));
            String token = jwtUtil.createEmailToken(user.getUserName());
            String linkReset = "http://localhost:4200/reset-password/"+token;
            provideSendEmail.sendSimpleMessage(email,"Thay doi mat khau",linkReset);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Thay doi mat khau", linkReset)
            );
        }else {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("failed", "Email not found", "")
            );
        }
    }

    @PostMapping("/reset/password")
    public ResponseEntity<ResponseObject> resetPassword(HttpServletRequest request, @Valid @RequestBody ResetPassword resetPassword){
        try {
            String jwt = resetPassword.token;
            String username = jwtUtil.getUerNameFromToken(jwt);
            User user;
            user = userService.findByUsername(username);
            user.setUserPassword(resetPassword.getNewpassword());
            userService.save(user, "User");
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Reset Password successfully", "")
            );
        } catch (UsernameNotFoundException exception){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("failed", exception.getMessage(), "")
            );
        }
    }

    @PostMapping("/upload-image/{folder}")
    public ResponseEntity<ResponseObject> updateImage(@PathVariable String folder,
                                                      @ModelAttribute MultipartFile image) {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Upload file successfully", uploadImage.uploadImage(folder,image))
        );
    }
}
