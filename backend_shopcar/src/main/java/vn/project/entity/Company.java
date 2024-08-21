package vn.project.entity;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Companies")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CompanyId")
    private int companyId;

    @Column(name = "CompanyName")
    private String companyName;

    @Column(name = "CompanyStatus")
    private  int companyStatus;

    @OneToMany(mappedBy = "company")
    private List<Car> cars;

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public int getCompanyStatus() {
        return companyStatus;
    }

    public void setCompanyStatus(int companyStatus) {
        this.companyStatus = companyStatus;
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }
}
