import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';
import { User } from '../user';
import {Question} from '../question'
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  questions;
  questionarr :Array<Question>;
  user;
  name;
   played:boolean

  constructor(private _communicationService: CommunicationService, private _router: Router) {
    this.user = new User();
   
    this._communicationService.allQuestions()
    .then( result => { 
      console.log("question op", result)
      this.questionarr = result})
    .catch( err => {
      console.log("Q fail" , err)
      console.log(err); })

    this.checkSession();
   }

  ngOnInit() {
  }
    processPlay(){
    console.log(this.user);
    this.user.name = this.name;
    this.played =true
    console.log("this.user",this.user)
    this._communicationService.createUser(this.user);
    this._router.navigate(["/landing"]);

  }

   checkSession(){
    this.name = this._communicationService.checkSession();
    if(!this.name){
      this.name = prompt("What's your name")
      console.log("this.name ",this.name )
      this._communicationService.setSession(this.name);
    }
  }
    endSession(){
    this._communicationService.endSession();
    this.checkSession();
  }

}
