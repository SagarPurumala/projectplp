import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  error: boolean;
  constructor(private builder: FormBuilder, private router: Router) { }
  loginGroup;
  ngOnInit() {
    this.loginGroup = this.builder.group({
      username: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    })
  }
  submit() {
    console.log(this.loginGroup.value);
    let userString = localStorage.getItem(this.loginGroup.value.username);
    if (userString != null) {
      let userobj = JSON.parse(userString);
      if (userobj.username === this.loginGroup.value.username && userobj.pass === this.loginGroup.value.pass) {
        sessionStorage.setItem('user', userobj.username);
        this.router.navigate(['/userhome']);
      } else {
        this.error = true;
      } 
    }else {
        this.error = true;

      } 
  }

}
