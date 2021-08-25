import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-storepackage',
  templateUrl: './storepackage.component.html',
  styleUrls: ['./storepackage.component.css']
})
export class StorepackageComponent implements OnInit {

  constructor(private service : ServiceService) { }

  searchPackage : string = "" ;
  package : any ;

  storepackage(val:any){
    this.service.storepackageapi(val).subscribe((data)=>{
      console.log(val);
      if(data == 1){
        console.log(data);
        alert("Package Successfully added to Store")
        window.location.reload();
      }else{
        // console.log(data);
        alert("ERROR")
      }
      
    })
  }
  getStorePackages(){
    this.service.getstorepackagesapi(this.searchPackage).subscribe((result)=>{
      this.package = result; 
      console.log(result)
      console.log("DONE")
    })
  }
  deletestoredetails(){
    this.service.deletepackageapi(this.searchPackage).subscribe((result)=>{
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
  editPackages(val:any){
    this.service.editstorepackageapi(val).subscribe((result)=>{
      console.log(result)
      if(result == 1){
        alert("Update Successfull...")
        console.log("DONE")
        window.location.reload();
      }else{
        alert("Error...")
        console.log("ERROR")
      }
      
    })
  }

  ngOnInit(): void {
  }

  edit_function(){
    this.getStorePackages();
  }
}
