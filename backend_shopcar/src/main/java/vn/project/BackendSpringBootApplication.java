package vn.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
public class BackendSpringBootApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendSpringBootApplication.class, args);
    }
}
