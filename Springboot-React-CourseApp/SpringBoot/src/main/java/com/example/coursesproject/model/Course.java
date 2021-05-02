package com.example.coursesproject.model;

import javax.persistence.*;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "course_name")
    private String courseName;

    @Column(name = "course_duration")
    private String courseDuration;

    @Column(name = "books_available")
    private int booksAvailable;

    public Course() {
    }

    public Course(String courseName, String courseDuration, int booksAvailable) {
        this.courseName = courseName;
        this.courseDuration = courseDuration;
        this.booksAvailable = booksAvailable;
    }
    public Integer getId() {
        return id;
    }
    public String getCourseName() {
        return courseName;
    }
    public String getCourseDuration() {
        return courseDuration;
    }
    public int getBooksAvailable() {
        return booksAvailable;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
    public void setCourseDuration(String courseDuration) {
        this.courseDuration = courseDuration;
    }
    public void setBooksAvailable(int booksAvailable) {
        this.booksAvailable = booksAvailable;
    }
}
