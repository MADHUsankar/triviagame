import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 
import { LandingComponent } from './landing/landing.component';
import { QuestionComponent } from './question/question.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "lets_play", component: PlayComponent },
  { path: "new_question", component: QuestionComponent },
  { path: "", pathMatch: "full", redirectTo: "/landing"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
