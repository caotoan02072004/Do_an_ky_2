package vn.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.project.entity.Company;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    public List<Company> findByCompanyName(String key);
}
        