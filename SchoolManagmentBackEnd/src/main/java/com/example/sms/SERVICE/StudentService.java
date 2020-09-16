package com.example.sms.SERVICE;

import com.example.sms.DTO.StudentDTO;
import com.example.sms.MODEL.Student;
import com.example.sms.REPOSITORY.StudentRepository;
import com.example.sms.REPOSITORY.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public ResponseEntity<Student> saveStudent(StudentDTO studentDTO){
        try {
            Student student = new Student();
            student.setFirstName(studentDTO.getFirstName());
            student.setLastName(studentDTO.getLastName());
            student.setAddress(studentDTO.getAddress());
            student.setDob(studentDTO.getDob());
            student.setEmail(studentDTO.getEmail());
            student.setGender(studentDTO.getGender());
            student.setProfilePicture(student.getProfilePicture());
            studentRepository.save(student);
            return new ResponseEntity<Student>(student,HttpStatus.OK);

        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    public ResponseEntity<Student> updateStudent(Long studentId,StudentDTO studentDTO){
        try {
            Optional<Student> student = studentRepository.findById(studentId);
            Student student1 = student.get();
            if(student.isPresent()){
                student1.setFirstName(studentDTO.getFirstName());
                student1.setLastName(studentDTO.getLastName());
                student1.setAddress(studentDTO.getAddress());
                student1.setDob(studentDTO.getDob());
                student1.setEmail(studentDTO.getEmail());
                student1.setGender(studentDTO.getGender());
                student1.setProfilePicture(studentDTO.getProfilePicture());
                studentRepository.save(student1);
            }
            return new ResponseEntity<Student>(student1,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Student> getById(Long studentId){
        try {
            Optional<Student> student = studentRepository.findById(studentId);
            Student student1 = student.get();
            if(student.isPresent()){
                return new ResponseEntity<Student>(student1,HttpStatus.OK);
            }

        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
