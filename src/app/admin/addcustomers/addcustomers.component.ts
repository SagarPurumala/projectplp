import { Component, OnInit } from '@angular/core';
import { AdminnavService } from '../adminnav.service';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.css']
})
export class AddcustomersComponent implements OnInit {

  constructor(private adminnav:AdminnavService) { }

  ngOnInit() {
    this.adminnav.show();
  }

}
