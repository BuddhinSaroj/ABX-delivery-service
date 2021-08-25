import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-assignpackage',
  templateUrl: './assignpackage.component.html',
  styleUrls: ['./assignpackage.component.css']
})
export class AssignpackageComponent implements OnInit {

  assignedPackage : string = "" ;
  package : any ;

  constructor(private service : ServiceService) { }

  ngOnInit(): void {
  }

  assignpackage(val:any){
    this.service.assignpackageapi(val).subscribe((data)=>{
      console.log(val);
      if(data == 1){
        console.log(data);
        alert("Package Successfully assigned")
        window.location.reload();
      }else{
        // console.log(data);
        alert("ERROR")
      }
      
    })
  }
  getAssignedPackages(){
    this.service.getassignedpackagesapi(this.assignedPackage).subscribe((result)=>{
      this.package = result; 
      console.log(result)
      console.log("DONE")
    })
  }
  deleteassignedpackagedetails(){
    this.service.deleteassignedpackagesapi(this.assignedPackage).subscribe((result)=>{
      if(result == 1){
        alert("Deleted Successfull...")
        console.log("Deleted")
        window.location.reload();
      }else{
        alert("ERROR...")
        console.log("ERROR")
        window.location.reload();
      }
    })
  }
}
