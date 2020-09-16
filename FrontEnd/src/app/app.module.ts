import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

//ant Design
import { NzButtonModule } from 'ng-zorro-antd/button';


import { HttpClientModule } from '@angular/common/http';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddTeacherComponent } from './teacher/add-teacher/add-teacher.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewTeacherComponent } from './teacher/view-teacher/view-teacher.component';
import { AddClassComponent } from './add-class/add-class.component';
import { ViewClassComponent } from './view-class/view-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    AddTeacherComponent,
    AddStudentComponent,
    ViewStudentComponent,
    ViewTeacherComponent,
    AddClassComponent,
    ViewClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
     NzButtonModule,
     NzLayoutModule,
     NzBreadCrumbModule,
     NgZorroAntdModule,
     BrowserAnimationsModule,
     NoopAnimationsModule,
     
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
