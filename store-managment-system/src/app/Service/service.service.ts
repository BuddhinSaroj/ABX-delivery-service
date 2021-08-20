import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // public employeeapi(data:any){
  //   return this.http.post<any>("http://localhost:8080/webapi/emp/save",data);
  // }
}
