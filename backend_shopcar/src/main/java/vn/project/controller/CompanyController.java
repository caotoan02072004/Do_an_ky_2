package vn.project.controller;

import org.apache.http.protocol.HTTP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.project.dto.response.ResponseObject;
import vn.project.entity.Company;
import vn.project.service.company.CompanyService;
import vn.project.service.company.ICompanyService;

import java.sql.Blob;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/company")
public class CompanyController {
    @Autowired
    private ICompanyService companyService;

    @GetMapping("")
    ResponseEntity<ResponseObject> getAllCompany(@RequestParam(defaultValue = "") String key){
        List<Company> list = null;  
        if (key.equals("")){
            list = companyService.findAll();
        }else {
            list = companyService.findByCompanyName(key);
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

    @GetMapping("/{companyId}")
    ResponseEntity<ResponseObject> findById(@PathVariable int companyId){
        Optional<Company> foundCompany = companyService.findById(companyId);
        if (foundCompany.isPresent()){
            return  ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Query company successfully", foundCompany)
            );
        }else {
            return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "cannot find company with id = "+companyId, "")
            );
        }
    }

    @PostMapping("")
    ResponseEntity<ResponseObject> insertCompany(@RequestBody Company newCompany){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "Insert data successfully", companyService.save(newCompany))
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("error", "Insert data failed", "")
            );
        }
    }

    @PutMapping("/{companyId}")
    ResponseEntity<ResponseObject> updateCompany(@RequestBody Company newCompany, @PathVariable int companyId){
        Company updateCompany = companyService.findById(companyId)
                .map(company -> {
                    company.setCompanyName(newCompany.getCompanyName());
                    company.setCompanyStatus(newCompany.getCompanyStatus());
                    return companyService.save(company);
                }).orElseGet(()->{
                    newCompany.setCompanyId(companyId);
                    return companyService.save(newCompany);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Update data successfuly", updateCompany)
        );
    }

    @DeleteMapping("/{companyId}")
    ResponseEntity<ResponseObject> deleteCompany(@PathVariable int companyId){
        boolean exits = companyService.exitstsById(companyId);
        if (exits){
            companyService.deleteById(companyId);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "delete data successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed", "Cannot find data to delete", "")
        );
    }
}
