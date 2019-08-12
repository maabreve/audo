import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exam-header',
  templateUrl: './exam-header.component.html',
  styleUrls: ['./exam-header.component.scss']
})
export class ExamHeaderComponent implements OnInit {
  columnSelected: number = 2;
  columnSortAsc: boolean = true;
  currentSort: number = 2;
  @Output() sort: EventEmitter<any> = new EventEmitter<any>();;

  constructor() { }

  ngOnInit() {
  }

  sortColumn(column: number) {
    this.columnSelected = column;
    this.columnSortAsc = this.currentSort === this.columnSelected ? !this.columnSortAsc : true;
    this.currentSort = column;
    this.sort.emit({column: column, order: this.columnSortAsc ? 'asc' : 'desc'});
  }

}
