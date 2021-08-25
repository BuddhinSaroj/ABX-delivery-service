import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeComponent } from './employee/employee.component';
import { PackagedetailsComponent } from './packagedetails/packagedetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { StorepackageComponent } from './storepackage/storepackage.component';
import { AssignpackageComponent } from './assignpackage/assignpackage.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'nav',component : NavBarComponent},
  {path : 'employee',component : EmployeeComponent},
  {path : 'package',component : PackagedetailsComponent},
  {path : 'about',component : AboutusComponent},
  {path : 'store',component : StorepackageComponent},
  {path : 'assign',component : AssignpackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
