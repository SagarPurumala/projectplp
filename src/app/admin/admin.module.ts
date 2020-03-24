import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AddcustomersComponent } from './addcustomers/addcustomers.component';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path:"addcustomer",component:AddcustomersComponent},
  {path:"adminhome",component:AdminhomeComponent,children:[{path:"addcustomer",component:AddcustomersComponent}]},
  {path:"adminhome",component:AdminhomeComponent,children:[{path:"header",component:HeaderComponent}]}
];

@NgModule({
  declarations: [AdminhomeComponent, AdminloginComponent, AddcustomersComponent],
  imports: [RouterModule.forChild(routes),
  
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [AdminhomeComponent,AddcustomersComponent]
})
export class AdminModule { }
