package com.example.coursesproject.controller;

import com.example.coursesproject.dao.CoursesDao;
import com.example.coursesproject.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("api/")
public class CoursesController {

    @Autowired
    private CoursesDao coursesDao;

    @GetMapping("viewCourses")
    public List<Course> viewCourses() { return this.coursesDao.findAll(); }

    @PostMapping("addCourse")
    private int addCourse(@RequestBody Course course) {
        System.out.println("Course added!");
        this.coursesDao.save(course);
        return course.getId();
    }

    @PostMapping("deleteCourse")
    private void deleteCourse(@RequestBody Course course) {
        System.out.println(course);
        System.out.println("Deleting");
        System.out.println(course.getId());
        System.out.println(course.getCourseName());
        System.out.println(course.getCourseDuration());
        this.coursesDao.deleteById(course.getId());
        System.out.println("YAY deleted!");
    }

    @PostMapping("updateCourse")
    private void updateCourse(@RequestBody Course course) {
        System.out.println(course);
        System.out.println("Updating");
        System.out.println(course.getId());
        System.out.println(course.getCourseName());
        System.out.println(course.getCourseDuration());
        this.coursesDao.upd(course.getId(), course.getCourseName(), course.getCourseDuration(), course.getBooksAvailable());
        System.out.println("YAY updated!");
    }
}
