import { Injectable } from '@angular/core';

const monthNames: string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  static getShortDate(date: Date): string {
    return date.getDate().toString() + ' ' + monthNames[date.getMonth()];
  }
  
  static isToday(date: Date) {
    var today = new Date();
    return date.getDate() === today.getDate() 
      && date.getMonth() === today.getMonth() 
      && date.getFullYear() === today.getFullYear();
  }
}
