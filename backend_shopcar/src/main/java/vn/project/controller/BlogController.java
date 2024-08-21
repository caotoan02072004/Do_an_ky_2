package vn.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.project.dto.response.ResponseObject;
import vn.project.entity.Blog;
import vn.project.service.blog.IBlogService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/blog")
public class BlogController {
    @Autowired
    private IBlogService blogService;

    @GetMapping("")
    ResponseEntity<ResponseObject> getAllBlog(@RequestParam(defaultValue = "") String key){
        List<Blog> list = null;
        if (key.equals("")){
            list = blogService.findAll();
        }else {
            list = blogService.findByName(key);
            if (list.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                        new ResponseObject("failed", "No Data", "")
                );
            }
        }
        if (!list.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Query data successfully", list)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "No Data", "")
            );
        }
    }

    @GetMapping("/{blogId}")
    ResponseEntity<ResponseObject> findById(@PathVariable int blogId){
        Optional<Blog> foundBlog = blogService.findById(blogId);
        if (foundBlog.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "Query company successfully", foundBlog)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed", "cannot find company with id = " + blogId, "")
            );
        }
    }

    @PostMapping("")
    ResponseEntity<ResponseObject> insertBlog(@RequestBody Blog newBlog){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("ok", "Insert data successfully", blogService.save(newBlog))
            );
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("error", "Insert data failed", "")
            );
        }
    }

    @PutMapping("/{blogId}")
    ResponseEntity<ResponseObject> updateBlog(@RequestBody Blog newBlog, @PathVariable int blogId){
        Blog updateBlog = blogService.findById(blogId)
                .map(blog -> {
                    blog.setBlogTitle(newBlog.getBlogTitle());
                    blog.setBlogContent(newBlog.getBlogContent());
                    blog.setBlogAuthor(newBlog.getBlogAuthor());
                    blog.setBlogDate(newBlog.getBlogDate());
                    return blogService.save(blog);
                }).orElseGet(()->{
                    newBlog.setBlogId(blogId);
                    return blogService.save(newBlog);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("success", "Update data successfuly", updateBlog)
        );
    }

    @DeleteMapping("/{blogId}")
    ResponseEntity<ResponseObject> deleteBlog(@PathVariable int blogId){
        boolean exits = blogService.exitstsById(blogId);
        if (exits){
            blogService.deleteById(blogId);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success", "delete data successfully", "")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("failed", "Cannot find data to delete", "")
        );
    }
}
