import { Component, OnInit, EventEmitter } from '@angular/core';
import { BookService } from '../../services';
// import { Book } from "../../../types";
import { Book } from '../../../types';
import { Observable, of, merge } from 'rxjs';

@Component({
  selector: 'bs-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  books$: Observable<Book[]> = of([]);
  termEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.books$ = merge(
      this.bs.search(this.termEmitter.asObservable()),
      this.bs.getBooks()
    );
  }
}
