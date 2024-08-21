package vn.project.service.blog;

import vn.project.entity.Blog;

import java.util.List;
import java.util.Optional;

public interface IBlogService {
    public List<Blog> findAll();
    public Blog save(Blog blog);
    public Optional<Blog> findById(Integer blogId);
    public boolean exitstsById(Integer blogId);
    public void deleteById(Integer blogId);
    public List<Blog> findByName(String key);
}
