import { Component, OnInit } from '@angular/core';

import {Teacher} from '../iTeacher'

import { TeacherService } from '../teacher.service';
import { error } from 'selenium-webdriver';



@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor( private teacherService : TeacherService) { }

  ngOnInit(): void {
  }

  main = "Teacher";

  teacher : Teacher

  addTeacher(form){

    console.log(form)

    this.teacher = {
      firstName: form.firstName,
      lastName: form.lastName,
      // contact: form.,
      dob: form.dob,
      address: form.address,
     picture: form.picture,
      email: form.email,
      gender: form.gender,
      qualification: form.qualification
    }

    this.teacherService.addTeacher(this.teacher).subscribe(response =>{

      alert("data Added");

    },error=> console.log(error));


    // let student = {
    //   firstName: form.firstName,
    //   lastName: form.lastName,
    //   fatherName: form.fatherName,
    //   fatherPhone: form.fatherPhone,
    //   homeNumber: form.homeNumber,
    //   email: form.email,
    //   fees: form.fees,
    //   feesSubmit: form.feesSubmit,
    //   admisionDate: form.admisionDate
    // }
  }

  
}
