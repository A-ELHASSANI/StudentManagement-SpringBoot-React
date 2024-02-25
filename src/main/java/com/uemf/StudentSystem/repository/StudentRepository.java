package com.uemf.StudentSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uemf.StudentSystem.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
