import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empId:String="";
  name:String="";
  company:any;

  constructor(private service : ServiceService) { }
  // constructor(private http:HttpClient){}

  getValues(val:any){
    this.service.employeeapi(val).subscribe((data)=>{
      console.log(data);
      alert("Update Successfull")
      window.location.reload();
    })
  }

  getEmployees(){
    this.service.getemployeesapi().subscribe((result)=>{
      this.company = result;
      console.log(result)
      console.log("DONE")
    })
  }

  deleteEmployee(employeeId:any){
    console.log("On delete")
    this.service.deleteemployeeapi(employeeId).subscribe((result)=>{
      console.log("DELETED",result)
      // window.location.reload();
      this.getEmployees();
    })
  }

  ngOnInit(): void {
  }

  url="/src/assets/image/bg.jpg";

}
