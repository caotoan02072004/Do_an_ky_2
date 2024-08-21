package vn.project.cloudinary;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class CloudinaryConfig {
    private String cloudName = "dhwctm9po";
    private String apiKey = "289582281343539";
    private String apiSecret = "x7I-w45yHq6oYMN3CbyNYYXpj2E";

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", cloudName,
                "api_key", apiKey,
                "api_secret", apiSecret));
    }

}
