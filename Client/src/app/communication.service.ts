import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import {User} from "./user"

@Injectable()
export class CommunicationService {
  user;
  
  constructor(private http: Http) { }

  createQuestion(question) {
    console.log("in the create question service")
    return this.http.post("/createQuestion", question).map(data => data.json()).toPromise();
  }

  createUser(user){
    console.log("create user in service")
    return this.http.post("/createUser", user).map(data => data.json()).toPromise();

  }

    allQuestions() {
    return this.http.get("/allQuestions").map(data => data.json()).toPromise();
  }

 checkSession(){
    if(this.user){
      return this.user;
    }
    return false;
     
  }
  setSession(name){
    this.user=name;
    // console.log("setting session in http service");
    // return this._http.post("/setSession", name).map(data => data.json()).toPromise();
  }

    allUsers(){
    return this.http.get("/allUsers").map(data => data.json()).toPromise();
  }
   

    registration (user:User){
    return this.http.post("/register",user)
        .map(data => data.json())
        .toPromise()
  }

    login (user:User){
    return this.http.post("/login",user)
        .map(data => data.json())
        .toPromise()
  }
      endSession(){
    this.user = undefined;
    //this._http.get("/endSession").map(data => data.json()).toPromise();
  }
}