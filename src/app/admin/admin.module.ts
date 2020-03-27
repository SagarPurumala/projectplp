import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddcustomersComponent } from './addcustomers/addcustomers.component';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycustomersComponent } from './mycustomers/mycustomers.component';


const routes: Routes = [
  {path:"addcustomer",component:AddcustomersComponent},
  // {path:"adminhome",component:AdminhomeComponent,children:[{path:"addcustomer",component:AddcustomersComponent}]},
  
];

@NgModule({
  declarations: [AdminhomeComponent, AdminloginComponent, AddcustomersComponent, MycustomersComponent],
  imports: [RouterModule.forChild(routes),
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [AdminhomeComponent,AddcustomersComponent]
})
export class AdminModule { }
