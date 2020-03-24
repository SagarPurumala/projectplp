import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminnavService {
  visible: boolean;
  constructor() { this.visible = false;  }
  hide() { this.visible = false; }

  show() { this.visible = true; }
}
