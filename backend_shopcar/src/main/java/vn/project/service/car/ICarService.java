package vn.project.service.car;

import vn.project.entity.Car;

import java.util.List;
import java.util.Optional;

public interface ICarService {
    public List<Car> findAll();
    public List<Car> findByCarName(String key);
    public Optional<Car> findById(Integer carId);
    public Car save(Car car);
    public boolean exitstsById(Integer carId);
    public void deleteById(Integer carId);
}
