import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';




@NgModule({
  declarations: [AdminhomeComponent, AdminloginComponent],
  imports: [
  
    CommonModule,
    
  ]
})
export class AdminModule { }
