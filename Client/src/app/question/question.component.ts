import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Router } from '@angular/router';
// import { User } from '../user';
import {Question} from '../question'
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
 question;
 name;
 successmessage;
   constructor(private _communicationService: CommunicationService, private _router: Router) {
      this.question = new Question();
   }

  ngOnInit() {
  }

  processForm(){
    console.log("inside create-question-component");
    this._communicationService.createQuestion(this.question)
            .then(() => { 
              this.successmessage="Question addes succesfully"
              this._router.navigate(["/landing"]);
             })
            .catch((err) => { console.log(err); });
    this._router.navigate(["/landing"]);
  }
  checkSession(){
    this._communicationService.checkSession().then( result => {
      console.log(`result from httpservice ${result}`)
      this.name = result
      if(this.name=="false"){
      this.name = prompt("What is your name?")
      this._communicationService.setSession(name)}
    }).catch(err => {
        console.log(`errors from httpservice ${err}`)
        console.log(err);})
    console.log(`the result from httpservice ${this.name}`)
    
  }
  
  endSession(){
    this._communicationService.endSession();
    this._router.navigate(["/landing"]);
  }

  
}
