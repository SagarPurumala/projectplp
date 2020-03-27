import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { Router } from '@angular/router';
import { AdminnavService } from '../adminnav.service';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private nav:NavbarService,private router: Router,private adminnav:AdminnavService) { }

  ngOnInit() {
   this.adminnav.show();
    this.nav.hide();
   
  }
  addcustomers(){
    this.router.navigate(['/addcustomer']);
  }
  adminhome(){
    this.router.navigate(['/adminhome']);
  }
  home(){
    this.router.navigate(['/adminlogin']);
  }
  mycustomers(){
    this.router.navigate(['/mycustomers']);
  }
}
