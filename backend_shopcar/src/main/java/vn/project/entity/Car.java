package vn.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "Cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CarId")
    private int carId;

    @Column(name = "CarName")
    private String carName;

    @Column(name = "CarImage")
    private String carImage;

    @Column(name = "CarCompanyId")
    private  int carCompanyId;

    @Column(name = "CarDesign")
    private String carDesign;

    @Column(name = "CarDate")
    private String carDate;

    @Column(name = "CarColor")
    private String carColor;

    @Column(name = "CarPrice")
    private Float carPrice;

    @Column(name = "CarSalePrice")
    private Float carSalePrice;

    @Column(name = "CarStatus")
    private String carStatus;

    @Column(name = "CarNumberKm")
    private int carNumberKm;

    @Column(name = "CarDescription")
    private String carDescription;

    @ManyToOne
    @JoinColumn(name = "carCompanyId", referencedColumnName = "companyId", insertable = false, updatable = false)
    @JsonIgnore
    private Company company;


    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public String getCarImage() {
        return carImage;
    }

    public void setCarImage(String carImage) {
        this.carImage = carImage;
    }

    public int getCarCompanyId() {
        return carCompanyId;
    }

    public void setCarCompanyId(int carCompanyId) {
        this.carCompanyId = carCompanyId;
    }

    public String getCarDesign() {
        return carDesign;
    }

    public void setCarDesign(String carDesign) {
        this.carDesign = carDesign;
    }

    public String getCarDate() {
        return carDate;
    }

    public void setCarDate(String carDate) {
        this.carDate = carDate;
    }

    public String getCarColor() {
        return carColor;
    }

    public void setCarColor(String carColor) {
        this.carColor = carColor;
    }

    public Float getCarPrice() {
        return carPrice;
    }

    public void setCarPrice(Float carPrice) {
        this.carPrice = carPrice;
    }

    public Float getCarSalePrice() {
        return carSalePrice;
    }

    public void setCarSalePrice(Float carSalePrice) {
        this.carSalePrice = carSalePrice;
    }

    public String getCarStatus() {
        return carStatus;
    }

    public void setCarStatus(String carStatus) {
        this.carStatus = carStatus;
    }

    public int getCarNumberKm() {
        return carNumberKm;
    }

    public void setCarNumberKm(int carNumberKm) {
        this.carNumberKm = carNumberKm;
    }

    public String getCarDescription() {
        return carDescription;
    }

    public void setCarDescription(String carDescription) {
        this.carDescription = carDescription;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "Car{" +
                "carId=" + carId +
                ", carName='" + carName + '\'' +
                ", carImage='" + carImage + '\'' +
                ", carCompanyId=" + carCompanyId +
                ", carDesign='" + carDesign + '\'' +
                ", carDate=" + carDate +
                ", carColor='" + carColor + '\'' +
                ", carPrice=" + carPrice +
                ", carSalePrice=" + carSalePrice +
                ", carStatus='" + carStatus + '\'' +
                ", carNumberKm=" + carNumberKm +
                ", carDescription='" + carDescription + '\'' +
                '}';
    }
}
