import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
login_user = new User
login_error = {status:false, message:{}};
reg_user = new User
luser: User = new User();
ruser: User = new User();
loginError: String;
regError: String;
  constructor(private _communicationService: CommunicationService, private _router: Router) {}

  login(){
    console.log("login attempt", this.luser)
    this._communicationService.login(this.luser)
    .then(() => {console.log("login success in componnent"); this._router.navigate(['landing'])})
    .catch((err) => { 
      if (err.status == '401') {
        this.loginError = "No user registered with that email.";
      }
      else if (err.status == '403') {
        this.loginError = "Password is incorrect.";
      }
    })
  }

    registration(){
    console.log(this.ruser)
    this._communicationService.registration(this.ruser)
    .then(()=> {
      this._router.navigate(['landing'])
    })
    .catch((err) => { this.regError = "A user with that email already exists." });
    this.ruser = new User
  }


}
