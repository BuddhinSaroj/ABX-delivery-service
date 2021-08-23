import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeComponent } from './employee/employee.component';
import { PackagedetailsComponent } from './packagedetails/packagedetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path : 'nav',component : NavBarComponent},
  {path : 'employee',component : EmployeeComponent},
  {path : 'package',component : PackagedetailsComponent},
  {path : 'about',component : AboutusComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
