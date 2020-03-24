import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private nav:NavbarService,private navh:NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.navh.show();
  }

}
