import { Component, OnInit } from '@angular/core';
import { AdminnavService } from '../adminnav.service';
import { NavbarService } from 'src/app/navbar.service';
import { NavmethodService } from '../navmethod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycustomers',
  templateUrl: './mycustomers.component.html',
  styleUrls: ['./mycustomers.component.css']
})
export class MycustomersComponent implements OnInit {

  constructor(private adminnav:AdminnavService,private nav:NavbarService,private router: Router) { }

  ngOnInit() {
    this.nav.hide();
    this.adminnav.show();
 
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
