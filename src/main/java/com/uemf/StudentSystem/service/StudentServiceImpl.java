package com.uemf.StudentSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uemf.StudentSystem.model.Student;
import com.uemf.StudentSystem.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

//	@SuppressWarnings("deprecation")
//	@Override
//	public Student removeStudent(Student student) {
//		
//		return studentRepository.getById(student.getId());
//	}
    
}
