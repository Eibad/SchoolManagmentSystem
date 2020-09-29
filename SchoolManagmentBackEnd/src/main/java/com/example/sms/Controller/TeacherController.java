package com.example.sms.Controller;


import com.example.sms.DTO.StudentDTO;
import com.example.sms.DTO.TeacherDTO;
import com.example.sms.MODEL.Student;
import com.example.sms.MODEL.Teacher;
import com.example.sms.REPOSITORY.StudentRepository;
import com.example.sms.REPOSITORY.TeacherRepository;
import com.example.sms.SERVICE.StudentService;
import com.example.sms.SERVICE.TeacherService;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TeacherController {

    @Autowired
    TeacherRepository teacherRepository;

    @Autowired
    TeacherService teacherService;

    @PostMapping("/teacher")
    private ResponseEntity<Teacher> save(@RequestBody TeacherDTO teacherDTO){
        return teacherService.saveTeacher(teacherDTO);
    }

    @PutMapping("/teacher/{id}")
    private ResponseEntity<Teacher> update(@NotNull @RequestBody TeacherDTO teacherDTO, @NotNull @PathVariable("id") long id){
        return teacherService.updateTeacher(id,teacherDTO);
    }

    @GetMapping("/teacher/{id}")
    private ResponseEntity<Teacher> getById(@NotNull @PathVariable("id") long id){
        return teacherService.getById(id);
    }

    @GetMapping("/teacher")
    private ResponseEntity<List <Teacher>> getAll(){
        return teacherService.getAll();
    }

    @GetMapping("/{name}")
    private ResponseEntity<List <Teacher>> searchByName(@NotNull @PathVariable("name") String name){
        return  new ResponseEntity<List<Teacher>>(teacherService.searchByName(name), HttpStatus.OK);
    }

    @DeleteMapping("/teacher/{index}")
    public ResponseEntity<String> deleteCar(@NotNull @PathVariable("index") Long index){
        teacherService.deleteTeacher(index);
        return new ResponseEntity<String>("success", HttpStatus.OK);

    }


}
