import { Component, OnInit } from '@angular/core';

import { ExamsService } from 'src/app/services/exams.service';
import { IExam } from 'src/app/models/exam';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})

export class ExamListComponent implements OnInit {
  exams: IExam[] = [];

  constructor(private examsService: ExamsService) { }

  ngOnInit() {
    this.loadExams();
  }

  loadExams() {
    this.examsService.getExams().subscribe(exams => {
      this.exams = exams;
    });
  }

  compare(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
  
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  sort(parameters) {
    console.log(parameters)
    switch (parameters.column) {
      case 1:
          this.exams.sort(this.compare("date", parameters.order));
        break;
      case 2:
        this.exams.sort(this.compare("name", parameters.order));
        break;
      case 3:
          this.exams.sort(this.compare("requestedBy", parameters.order));
        break;
    }
  }
}