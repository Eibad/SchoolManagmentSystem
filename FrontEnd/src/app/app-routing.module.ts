import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewTeacherComponent } from './teacher/view-teacher/view-teacher.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ViewClassComponent } from './view-class/view-class.component';


const routes: Routes = [
  { path: 'addteacher', component : AddTeacherComponent },
  { path: 'addstudent', component : AddStudentComponent },
  { path: 'viewstudent', component : ViewStudentComponent },
  { path: 'viewteacher', component : ViewTeacherComponent },
  { path: 'addclass', component : AddClassComponent },
  { path: 'viewclass', component : ViewClassComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
