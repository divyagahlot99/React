package com.example.coursesproject;

import com.example.coursesproject.dao.CoursesDao;
import com.example.coursesproject.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CoursesprojectApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(CoursesprojectApplication.class, args);
    }

    @Autowired
    private CoursesDao coursesDao;

    @Override
    public void run(String... args) throws Exception {
        this.coursesDao.save(new Course("DSA", "7 months", 5));
        this.coursesDao.save(new Course("TOC", "3 months", 4));
        this.coursesDao.save(new Course("DBMS", "11 months", 3));
        System.out.println(this.coursesDao.findAll());
        System.out.println("Heylloo");
    }
}
