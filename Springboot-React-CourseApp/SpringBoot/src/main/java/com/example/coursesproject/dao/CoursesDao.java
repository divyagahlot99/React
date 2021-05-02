package com.example.coursesproject.dao;

import com.example.coursesproject.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface CoursesDao extends JpaRepository<Course, Integer> {

    @Transactional
    @Modifying
    @Query("UPDATE Course course SET course.courseName = :courseName, course.courseDuration = :courseDuration, course.booksAvailable = :booksAvailable WHERE course.id = :id")
    public int upd(@Param("id") Integer id, @Param("courseName") String courseName, @Param("courseDuration") String courseDuration, @Param("booksAvailable") int booksAvailable);

}
