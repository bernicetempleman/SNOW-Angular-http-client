import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees():object{
    return[
      {"id":12,"name":"jas","age":42},
      {"id":13,"name":"jack","age":22},
      {"id":14,"name":"jash","age":21},
      {"id":15,"name":"jasdh","age":23},
    ];
  }
}
