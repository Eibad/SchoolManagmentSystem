import { Component, OnInit } from '@angular/core';
import {Student} from '../iStudent'
import { Router } from '@angular/router';

import { StudentService } from '../student.service';


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  studentArr =[];
  studentName;


  
  constructor(private route : Router,private studentService : StudentService) { }



  ngOnInit(): void {this.addRow();
    this.addRow();
  }

  i = 0;
  editId: string | null = null;
  listOfData: Student[] = [];


  
  addstudent(){
    this.route.navigate(["/addstudent"])
  }

  viewStudent(){

    this.studentService.getAllStudent().subscribe((respone:any)=>{

      this.studentArr = respone;      
      }, error => {
        console.log(error);
      })
  }

  searchStudent(){
    this.studentService.searchStudent(this.studentName).subscribe(response =>{

      this.studentArr = response;
    },error=> console.log(error));

  }

  delete(id){

    this.studentService.deleteStudent(id).subscribe(response=>console.log(response), error=>console.log(error));
    alert("deleted"+id);
    this.ngOnInit();
    //this.route.navigate(["viewstudent"]);
  }

  edit(id){
    this.route.navigate(["editteacher/"+id]);
  }



  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [      ...this.listOfData,
      {
        id: `${this.i}`,
        name: `Edward King ${this.i}`,
        age: '32',
        address: `London, Park Lane no. ${this.i}`
      }
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
}
