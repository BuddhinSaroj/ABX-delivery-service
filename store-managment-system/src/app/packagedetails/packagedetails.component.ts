import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-packagedetails',
  templateUrl: './packagedetails.component.html',
  styleUrls: ['./packagedetails.component.css']
})
export class PackagedetailsComponent implements OnInit {

  searchPackage : string = "" ;
  company : any ;
  
  constructor(private service : ServiceService) { 
  }

  
  savePackageDetails(val:any){
    this.service.savepackageapi(val).subscribe((data)=>{
      console.log(data);
      console.log(val)
      if(data==1){
        alert("Update Successfull")
      // window.location.reload();
      }else{
        alert("Please Check")
      }
      
    })
  }

  getPackages(){
    this.service.getpackagesapi(this.searchPackage).subscribe((result)=>{
      this.company = result; 
      console.log(result)
      console.log("DONE")
    })
  }
  editPackages(val:any){
    this.service.editpackagesapi(this.searchPackage,val).subscribe((result)=>{
      console.log(result)
      console.log("DONE")
    })
  }

  search_function(){
    console.log(this.searchPackage)
    this.getPackages();
  }
  edit_function(){
    console.log(this.editPackages)
    this.getPackages();
  }

  ngOnInit(): void {
  }

}
