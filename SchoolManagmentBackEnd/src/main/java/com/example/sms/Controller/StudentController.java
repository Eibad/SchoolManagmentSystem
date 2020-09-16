package com.example.sms.Controller;
import com.example.sms.DTO.StudentDTO;
import com.example.sms.MODEL.Student;
import com.example.sms.REPOSITORY.StudentRepository;
import com.example.sms.SERVICE.StudentService;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    StudentService studentService;

    @PostMapping("/student")
    private ResponseEntity<Student> save(@RequestBody StudentDTO studentDTO){
        return studentService.saveStudent(studentDTO);
    }

    @PutMapping("/student/{id}")
    private ResponseEntity<Student> update(@NotNull @RequestBody StudentDTO studentDTO,@NotNull @PathVariable("id") long id){
        return studentService.updateStudent(id,studentDTO);
    }

    @GetMapping("/student/{id}")
    private ResponseEntity<Student> getById(@NotNull @PathVariable("id") long id){
        return studentService.getById(id);
    }


}
