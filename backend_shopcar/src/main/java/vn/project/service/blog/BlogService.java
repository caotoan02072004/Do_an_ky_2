package vn.project.service.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.project.entity.Blog;
import vn.project.repository.BlogRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService implements IBlogService{
    @Autowired
    private BlogRepository blogRepository;

    @Override
    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

    @Override
    public Blog save(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Optional<Blog> findById(Integer blogId) {
        return blogRepository.findById(blogId);
    }

    @Override
    public boolean exitstsById(Integer blogId) {
        return blogRepository.existsById(blogId);
    }

    @Override
    public void deleteById(Integer blogId) {
        blogRepository.deleteById(blogId);
    }

    @Override
    public List<Blog> findByName(String key) {
        return blogRepository.findByBlogTitle(key);
    }
}
