import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empId:String="";
  name:String="";

  // constructor(private service : ServiceService) { }
  constructor(private http:HttpClient){}

  getValues(val:any){
    // console.log(val)
    // this.empId=val.empId;
    // this.name = val.name;

    // var formdata = new FormData();
    // formdata.append("empId",val.empId);
    // formdata.append("name",val.name);
    // console.log(val.empId)
    // console.log(val.name)
    // this.service.employeeapi(formdata).subscribe((data)=>{
    //   console.log(data);
    //   console.log("Done")
    // })

    this.http.post('http://localhost:8080/webapi/emp/save',val)
    .subscribe((result)=>{
      console.log(val)
    })
  }

  ngOnInit(): void {
  }

}
