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
  public deletepackageapi(id:any){
    return this.http.get("http://localhost:8080/webapi/package/delete?regNo="+id)
  }
  public storepackageapi(data:any){
    return this.http.post<any>("http://localhost:8080/webapi/store/storePackage",data);
  }
  public getstorepackagesapi(id:any){
    return this.http.get("http://localhost:8080/webapi/store/find?regId="+id)
  }
  public deletestorepackagesapi(id:any){
    return this.http.get("http://localhost:8080/webapi/store/delete?regId"+id)
  }
  public editstorepackageapi(data:any){
    return this.http.post<any>("http://localhost:8080/webapi/store/update",data);
  }
  public assignpackageapi(data:any){
    return this.http.post<any>("http://localhost:8080/webapi/assignment/save",data);
  }
  public getassignedpackagesapi(id:any){
    return this.http.get("http://localhost:8080/webapi/assignment/find?regId="+id)
  }
  public deleteassignedpackagesapi(id:any){
    return this.http.get("http://localhost:8080/webapi/assignment/Delete?regId="+id)
  }
}
