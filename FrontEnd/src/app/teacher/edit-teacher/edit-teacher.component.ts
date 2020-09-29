import { Component, OnInit } from '@angular/core';

import {  ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import {Teacher} from '../iTeacher'


@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacher: Teacher;

   id;


  constructor(private activedRoute: ActivatedRoute, private teacherService : TeacherService, private route : Router) {
   this.id = this.activedRoute.snapshot.params.id;

    this.teacherService.getTeacher(this.id).subscribe(
      (response: Teacher) => this.teacher = response,
      error => console.log(error));

   }

  ngOnInit(): void {
  }

  updateTeacher(form){

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

    this.teacherService.updateTeacher(this.id,this.teacher).subscribe(response =>{

      // alert("data updated");
      this.route.navigate(["/viewteacher"])

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
