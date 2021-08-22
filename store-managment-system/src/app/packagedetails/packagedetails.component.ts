import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-packagedetails',
  templateUrl: './packagedetails.component.html',
  styleUrls: ['./packagedetails.component.css']
})
export class PackagedetailsComponent implements OnInit {

  constructor(private service : ServiceService) { }

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

  ngOnInit(): void {
  }

}
