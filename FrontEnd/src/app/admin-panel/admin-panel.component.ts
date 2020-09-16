import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }


  main = "";
  sub = "";

  teacher(){
    this.route.navigate(["/addteacher"])
  }

  addstudent(){
    this.route.navigate(["/addstudent"])
  }

  
  viewstudent(){
    this.route.navigate(["/viewstudent"])
  }

  
  viewteacher(){
    this.route.navigate(["/viewteacher"])
  }

  addclass(){
    this.route.navigate(["/addclass"])
  }

  
  viewclass(){
    this.route.navigate(["/viewclass"])
  }

}
