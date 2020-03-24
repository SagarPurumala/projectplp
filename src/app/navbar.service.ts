import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;
  hvisible:boolean;
  constructor() {  this.visible = false;
    this.hvisible = false;  }

  hide() { this.visible = false;
    this.hvisible = false; }

  show() { this.visible = true;
    this.hvisible = true;  }

  toggle() { this.visible = !this.visible; }
 
}
