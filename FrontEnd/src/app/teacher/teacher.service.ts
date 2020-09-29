import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  baseUrl = environment.BASE_URL;

  api = "/api";

  constructor(private http : HttpClient) { }

  addTeacher(teacher) {
    return this.http.post(this.baseUrl+this.api + "/teacher", teacher);
  }

  getAllTeacher(): Observable<any> {
    return this.http.get(this.baseUrl+this.api + "/teacher");
  }

  getTeacher(id): Observable<any> {
    return this.http.get(this.baseUrl+this.api + "/teacher/" + id);
  }
  
  searchTeacher(name): Observable<any> {
    return this.http.get(this.baseUrl+this.api + "/" + name);
  }

  deleteTeacher(id) {
    return this.http.delete(this.baseUrl+this.api + "/teacher/" + id);
  }
  
  updateTeacher(teacherid, teacher) {
    return this.http.put(this.baseUrl+this.api + "/teacher/" + teacherid, teacher);
  }
}
