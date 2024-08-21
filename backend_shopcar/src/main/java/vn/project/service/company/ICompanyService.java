package vn.project.service.company;

import vn.project.entity.Company;

import java.util.List;
import java.util.Optional;

public interface ICompanyService {
    public List<Company> findAll();
    public Company save(Company company);
    public Optional <Company> findById(Integer companyId);
    public  boolean exitstsById(Integer companyId);
    public  void deleteById(Integer companyId);
    public List<Company> findByCompanyName(String key);
}
