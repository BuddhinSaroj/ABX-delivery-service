import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ServiceService } from './Service/service.service';
import { PackagedetailsComponent } from './packagedetails/packagedetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { QRCodeModule } from 'angularx-qrcode';
import { StorepackageComponent } from './storepackage/storepackage.component';
import { AssignpackageComponent } from './assignpackage/assignpackage.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeComponent,
    PackagedetailsComponent,
    AboutusComponent,
    StorepackageComponent,
    AssignpackageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
