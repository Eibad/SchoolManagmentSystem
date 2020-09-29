import { Component, OnInit } from '@angular/core';
import {Student} from './iStudent'
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  
  constructor(private route : Router) { }



  ngOnInit(): void {this.addRow();
    this.addRow();
  }

  i = 0;
  editId: string | null = null;
  listOfData: Student[] = [];


  
  addstudent(){
    this.route.navigate(["/addstudent"])
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
