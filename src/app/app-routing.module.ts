import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ExamListComponent } from './components/exams/exam-list/exam-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'exams'},
  { path: 'login', component: LoginComponent },
  { path: 'exams', component: ExamListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
