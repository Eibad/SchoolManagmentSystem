package com.example.sms.SERVICE;


import com.example.sms.DTO.StudentDTO;
import com.example.sms.DTO.TeacherDTO;
import com.example.sms.DTO.TeacherDTO;
import com.example.sms.MODEL.Student;
import com.example.sms.MODEL.Teacher;
import com.example.sms.REPOSITORY.StudentRepository;
import com.example.sms.REPOSITORY.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {

    @Autowired
    TeacherRepository teacherRepository;

    public ResponseEntity<Teacher> saveTeacher(TeacherDTO teacherDto){
        try {
            Teacher teacher = new Teacher();
            teacher.setFirstName(teacherDto.getFirstName());
            teacher.setLastName(teacherDto.getLastName());
            teacher.setAddress(teacherDto.getAddress());
            teacher.setDob(teacherDto.getDob());
            teacher.setEmail(teacherDto.getEmail());
            teacher.setGender(teacherDto.getGender());
            teacher.setProfilePicture(teacher.getProfilePicture());
            teacherRepository.save(teacher);
            return new ResponseEntity<Teacher>(teacher, HttpStatus.OK);

        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    public ResponseEntity<Teacher> updateTeacher(Long teacherId, TeacherDTO teacherDto){
        try {
            Optional<Teacher> teacherOptional = teacherRepository.findById(teacherId);
            Teacher teacher = teacherOptional.get();

            if(teacherOptional.isPresent()){

                teacher.setFirstName(teacherDto.getFirstName());
                teacher.setLastName(teacherDto.getLastName());
                teacher.setAddress(teacherDto.getAddress());
                teacher.setDob(teacherDto.getDob());
                teacher.setEmail(teacherDto.getEmail());
                teacher.setGender(teacherDto.getGender());
                teacher.setProfilePicture(teacherDto.getProfilePicture());
                teacherRepository.save(teacher);
            }
            return new ResponseEntity<Teacher>(teacher,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Teacher> getById(Long teacherId){
        try {
            Optional<Teacher> teacher = teacherRepository.findById(teacherId);
            Teacher teacher1 = teacher.get();
            if(teacher.isPresent()){
                return new ResponseEntity<Teacher>(teacher1,HttpStatus.OK);
            }

        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }


    public ResponseEntity<List <Teacher>> getAll(){
        try {
            List<Teacher> teacher = teacherRepository.findAll();

            return new ResponseEntity<List<Teacher>>(teacher,HttpStatus.OK);

        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<List <Teacher>> searchByName(String teacherName){
        try {

            List<Teacher> teacher = teacherRepository.findAll();
            return new ResponseEntity<List<Teacher>>(teacher,HttpStatus.OK);

        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
