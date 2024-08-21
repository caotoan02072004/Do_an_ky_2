package vn.project.service.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.project.entity.Company;
import vn.project.repository.CompanyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService implements ICompanyService{
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Company> findAll() {
        return companyRepository.findAll();
    }

    @Override
    public Company save(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public Optional<Company> findById(Integer companyId) {
        return companyRepository.findById(companyId);
    }

    @Override
    public boolean exitstsById(Integer companyId) {
        return companyRepository.existsById(companyId);
    }

    @Override
    public void deleteById(Integer companyId) {
        companyRepository.deleteById(companyId);
    }

    @Override
    public List<Company> findByCompanyName(String key) {
        return companyRepository.findByCompanyName(key);
    }
}
