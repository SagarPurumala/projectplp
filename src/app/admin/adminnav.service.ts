import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminnavService {

  avisible: boolean;
  
  constructor() {  this.avisible = false;
      }

  hide() { this.avisible = false;
    }

  show() { this.avisible = true;}
  

  toggle() { this.avisible = !this.avisible; }
}
