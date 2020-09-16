import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.css']
})
export class ViewClassComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  addclass(){
    this.route.navigate(["/addclass"])
  }

}
