package vn.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.project.dto.response.ResponseObject;
import vn.project.entity.Car;
import vn.project.service.car.ICarService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/car")
public class CarController {
    @Autowired
    private ICarService carService;

    @GetMapping("")
    ResponseEntity<ResponseObject> getAllCar(@RequestParam(defaultValue = "") String key){
        List<Car> list = null;
        if (key.equals("")){
            list = carService.findAll();
        }else {
            list = carService.findByCarName(key);
            if (list.isEmpty()){
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

    @GetMapping("/{carId}")
    ResponseEntity<ResponseObject> findById(@PathVariable int carId){
        Optional<Car> foundCar = carService.findById(carId);
        if (foundCar.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Query company successfully", foundCar)
            );
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "cannot find company with id = " + carId, "")
            );
        }
    }

    @PostMapping("")
    ResponseEntity<ResponseObject> insertCar(@RequestBody Car newCar){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "Insert data successfully", carService.save(newCar))
            );
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("error", "Insert data failed", "")
            );
        }
    }

    @PutMapping("/{carId}")
    ResponseEntity<ResponseObject> updateCar(@RequestBody Car newCar, @PathVariable int carId){
        Car updateCar = carService.findById(carId)
                .map(car -> {
                    car.setCarName(newCar.getCarName());
                    car.setCarImage(newCar.getCarImage());
                    car.setCarCompanyId(newCar.getCarCompanyId());
                    car.setCarDesign(newCar.getCarDesign());
                    car.setCarDate(newCar.getCarDate());
                    car.setCarColor(newCar.getCarColor());
                    car.setCarPrice(newCar.getCarPrice());
                    car.setCarSalePrice(newCar.getCarSalePrice());
                    car.setCarStatus(newCar.getCarStatus());
                    car.setCarNumberKm(newCar.getCarNumberKm());
                    car.setCarDescription(newCar.getCarDescription());
                    return carService.save(car);
                }).orElseGet(()->{
                    newCar.setCarId(carId);
                    return carService.save(newCar);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Update data successfuly", updateCar)
        );
    }

    @DeleteMapping("/{carId}")
    ResponseEntity<ResponseObject> deleteCar(@PathVariable int carId){
        boolean exits = carService.exitstsById(carId);
        if (exits){
            carService.deleteById(carId);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "delete data successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed", "Cannot find data to delete", "")
        );
    }
}
