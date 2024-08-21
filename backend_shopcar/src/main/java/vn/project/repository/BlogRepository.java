package vn.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.project.entity.Blog;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Integer> {
    public List<Blog> findByBlogTitle(String key);
}
