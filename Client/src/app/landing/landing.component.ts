import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  users;
  name;
  constructor(private _communicationService: CommunicationService, private _router: Router) {
    this.checkSession();
    this.allUsers();
  }


  ngOnInit() {
  }


   checkSession(){
    this.name = this._communicationService.checkSession();
    if(!this.name){
      this.name = prompt("What's your name")
      this._communicationService.setSession(this.name);
    }}

    allUsers(){
    this._communicationService.allUsers().then( result => { this.users = result}).catch( err => { console.log(err); })
  }
    
  endSession(){
    console.log("inside endSession")
    this._communicationService.endSession();
    location.reload();
  }
}
