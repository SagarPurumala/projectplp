import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { HeaderComponent } from './header/header.component';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
