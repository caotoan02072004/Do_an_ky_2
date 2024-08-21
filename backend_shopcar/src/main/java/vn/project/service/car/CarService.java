package vn.project.service.car;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.project.entity.Car;
import vn.project.repository.CarRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CarService implements ICarService{

    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> findAll() {
        return carRepository.findAll();
    }

    @Override
    public List<Car> findByCarName(String key) {
        return carRepository.findByCarName(key);
    }

    @Override
    public Optional<Car> findById(Integer carId) {
        return carRepository.findById(carId);
    }

    @Override
    public Car save(Car car) {
        return carRepository.save(car);
    }

    @Override
    public boolean exitstsById(Integer carId) {
        return carRepository.existsById(carId);
    }

    @Override
    public void deleteById(Integer carId) {
        carRepository.deleteById(carId);
    }
}
