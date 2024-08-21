package vn.project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vn.project.dto.response.ResponseObject;
import vn.project.entity.Role;
import vn.project.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping(path = "/role")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PreAuthorize("hasRole('Admin')")
    @GetMapping("")
    ResponseEntity<ResponseObject> getAllRole(@RequestParam(defaultValue = "") String key){
        List<Role> list = null;
        if (key.equals("")){
            list = roleService.findAll();
        }else {
            list = roleService.findByRoleName(key);
            if(list.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject("failed", "No Data", "")
                );
            }
        }

        if(!list.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Query data successfully", list)
            );
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "No Data", "")
            );
        }
    }

    @GetMapping("/{roleName}")
    ResponseEntity<ResponseObject> getById(@PathVariable String roleName){
        List<Role> list = roleService.findByRoleName(roleName);

        if(!list.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Query data successfully", list)
            );
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "No Data", "")
            );
        }
    }

    @PostMapping({"/createNewRole"})
    public Role createNewRole(@RequestBody Role role) {
        return roleService.createNewRole(role);
    }

    @PostMapping({"/delete"})
    ResponseEntity<ResponseObject> deleteRole(@RequestBody Role role){
        roleService.deleteByRoleName(role);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Delete data successfuly", "userName")
        );
    }
}
