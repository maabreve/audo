import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { IExam } from 'src/app/models/exam';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-exam-item',
  templateUrl: './exam-item.component.html',
  styleUrls: ['./exam-item.component.scss']
})

export class ExamItemComponent implements OnInit {
  @Input() exam: IExam;
  selected: boolean = false;

  constructor() { 
  }

  ngOnInit() {
  }

  getExamDate(date: Date) {
    if (DateService.isToday(date)) {
      return 'Hoje'
    } else {
      DateService.getShortDate(date);
    }
  }

  toogleDetails() {
    this.selected = !this.selected;
  }

}
