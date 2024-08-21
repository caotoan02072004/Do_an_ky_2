package vn.project.service.upload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.multipart.MultipartFile;
import vn.project.cloudinary.CloudinaryImage;

import java.util.ArrayList;
import java.util.List;

@Service
public class UploadFileService {
    @Autowired
    private CloudinaryImage cloudinaryImage;

    public String uploadImage(String folderName, MultipartFile image) {
        String imageUrl = cloudinaryImage.uploadImage(image, folderName);
        return imageUrl;
    }

    public List<String> uploadListImage(String folderName, @ModelAttribute List<MultipartFile> listImages) {
        List<String> listUrlUpload = new ArrayList<>();
        for(MultipartFile image: listImages) {
            listUrlUpload.add(cloudinaryImage.uploadImage(image, folderName));
        }
        return listUrlUpload;
    }
}
