import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = environment.BASE_URL;

  api = "/api";

  constructor(private http : HttpClient) { }

  addStudent(student) {
    return this.http.post(this.baseUrl+this.api + "/student", student);
  }

  getAllStudent(): Observable<any> {
    return this.http.get(this.baseUrl+this.api + "/student");
  }

  getStudent(id): Observable<any> {
    return this.http.get(this.baseUrl+this.api + "/student/" + id);
  }
  
  searchStudent(name): Observable<any> {
    return this.http.get(this.baseUrl+this.api + "/" + name);
  }

  deleteStudent(id) {
    return this.http.delete(this.baseUrl+this.api + "/student/" + id);
  }
  
  updateStudent(studentid, student) {
    return this.http.put(this.baseUrl+this.api + "/student/" + studentid, student);
  }
}
