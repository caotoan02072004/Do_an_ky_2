package vn.project.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Blogs")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BlogId")
    private int blogId;

    @Column(name = "BlogTitle")
    private String blogTitle;

    @Column(name = "BlogContent")
    private String blogContent;

    @Column(name = "BlogAuthor")
    private String blogAuthor;

    @Column(name = "BlogDate")
    private String blogDate;

    public Blog() {
    }

    public Blog(int blogId, String blogTitle, String blogContent, String blogAuthor, String blogDate) {
        this.blogId = blogId;
        this.blogTitle = blogTitle;
        this.blogContent = blogContent;
        this.blogAuthor = blogAuthor;
        this.blogDate = blogDate;
    }

    public int getBlogId() {
        return blogId;
    }

    public void setBlogId(int blogId) {
        this.blogId = blogId;
    }

    public String getBlogTitle() {
        return blogTitle;
    }

    public void setBlogTitle(String blogTitle) {
        this.blogTitle = blogTitle;
    }

    public String getBlogContent() {
        return blogContent;
    }

    public void setBlogContent(String blogContent) {
        this.blogContent = blogContent;
    }

    public String getBlogAuthor() {
        return blogAuthor;
    }

    public void setBlogAuthor(String blogAuthor) {
        this.blogAuthor = blogAuthor;
    }

    public String getBlogDate() {
        return blogDate;
    }

    public void setBlogDate(String blogDate) {
        this.blogDate = blogDate;
    }
}
