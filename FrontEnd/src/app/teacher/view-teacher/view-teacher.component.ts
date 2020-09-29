import { Component, OnInit } from '@angular/core';
import {Teacher} from '../iTeacher'

import { TeacherService } from '../teacher.service';
import { error } from 'selenium-webdriver';


import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {

  teacherArr =[];
  teacherName;



  constructor(private route : Router , private teacherService : TeacherService) {
   }



  ngOnInit(): void {
    this.viewteacher();
    console.log(this.teacherArr)
    

    // this.addRow();
    // this.addRow();
  }

  ngOnChanges(){
    this.searchTeachers()
  }

  viewteacher(){

    this.teacherService.getAllTeacher().subscribe((respone:any)=>{

      this.teacherArr = respone;      
      }, error => {
        console.log(error);
      })
  }

  searchTeachers(){
    this.teacherService.searchTeacher(this.teacherName).subscribe(response =>{

      this.teacherArr = response;
    },error=> console.log(error));

  }

  delete(id){

    this.teacherService.deleteTeacher(id).subscribe(response=>console.log(response), error=>console.log(error));
    alert("deleted"+id);
    this.ngOnInit();
    //this.route.navigate(["viewstudent"]);
  }

  edit(id){
    this.route.navigate(["editteacher/"+id]);
  }

  // i = 0;
  // editId: string | null = null;
  // listOfData: Person[] = [];

  // startEdit(id: string): void {
  //   this.editId = id;
  // }

  // stopEdit(): void {
  //   this.editId = null;
  // }

  // addRow(): void {
  //   this.listOfData = [      ...this.listOfData,
  //     {
  //       id: `${this.i}`,
  //       name: `Edward King ${this.i}`,
  //       age: '32',
  //       address: `London, Park Lane no. ${this.i}`
  //     }
  //   ];
  //   this.i++;
  // }

  // deleteRow(id: string): void {
  //   this.listOfData = this.listOfData.filter(d => d.id !== id);
  // }


}
