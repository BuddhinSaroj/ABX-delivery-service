import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  public employeeapi(data:any){
    return this.http.post<any>("http://localhost:8080/webapi/emp/save",data);
  }
  public getemployeesapi(){
    return this.http.get<any>("http://localhost:8080/webapi/emp/getAll");
  }
  public deleteemployeeapi(id:any){
    return this.http.get("http://localhost:8080/webapi/emp/delete?empId="+id)
  }
  public savepackageapi(data:any){
    return this.http.post<any>("http://localhost:8080/webapi/package/registerPackage",data);
  }
  public getpackagesapi(id:any){
    return this.http.get("http://localhost:8080/webapi/package/find?regNo="+id)
  }
  public editpackagesapi(id:any,data:any){
    return this.http.post<any>("http://localhost:8080/webapi/package/update?regNo="+id,data);
  }
}
