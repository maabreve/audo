import { Injectable } from '@angular/core';
import { IExam } from '../models/exam';
import { Observable } from 'rxjs';

const exams: IExam[] = [{
  id: 1,
  code: '0001',
  date: new Date(),
  name: 'Em Teleperfil Cefalostato com Traçado Cras',
  requestedBy: 'Dr. Marcos',
  img: ''
}, {
  id: 2,
  code: '0002',
  date: new Date(),
  name: 'Teleperfil em Cefalostato com Traçado',
  requestedBy: 'Dr. Marcos A',
  img: ''
}, 
{
  id: 3,
  code: '0003',
  date: new Date(),
  name: 'Em Teleperfil Cefalostato com Traçado Cras',
  requestedBy: 'Dr. Marcos B',
  img: ''
}, {
  id: 4,
  code: '0004',
  date: new Date(),
  name: 'Teleperfil em Cefalostato com Traçado',
  requestedBy: 'Dr. Marcos C',
  img: ''
}];


@Injectable({
  providedIn: 'root'
})

export class ExamsService   {
  constructor() {
    // super();
  }

  getExams() {
    return new Observable<IExam[]>((observer) => {

      observer.next(exams)
      observer.complete()
    });
  }
}

