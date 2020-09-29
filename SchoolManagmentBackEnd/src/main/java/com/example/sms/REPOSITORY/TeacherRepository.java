package com.example.sms.REPOSITORY;

import com.example.sms.MODEL.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher,Long> {




//    @Query(value = "SELECT * FROM teacher  where first_name like =:keyword%",nativeQuery = true)
//    public List<Teacher> searchByName(@Param("keyword") String keyword);

    @Query("SELECT m FROM Teacher m WHERE m.firstName LIKE %:name%")
    List<Teacher> searchByFirstName(@Param("name") String name);

}
