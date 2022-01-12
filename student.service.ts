import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl="http://localhost:3000/students/";
  constructor(private http:HttpClient) { }
   // Http Headers
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
     
  // GET
  GetStudents(): Observable<Student> {
    return this.http.get<Student>(this.baseurl)
  }
  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseurl}`, student);
  } 
  
}
