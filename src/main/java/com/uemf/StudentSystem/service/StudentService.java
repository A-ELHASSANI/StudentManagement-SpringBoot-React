package com.uemf.StudentSystem.service;

import java.util.List;

import com.uemf.StudentSystem.model.Student;

public interface StudentService {
	 public Student saveStudent(Student student);
	 public List<Student> getAllStudents();
//	 public Student removeStudent(Student student);
}
