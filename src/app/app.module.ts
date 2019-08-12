import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ExamListComponent } from './components/exams/exam-list/exam-list.component';
import { ExamItemComponent } from './components/exams/exam-item/exam-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExamHeaderComponent } from './components/exams/exam-header/exam-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamListComponent,
    ExamItemComponent,
    NavbarComponent,
    ExamHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
