import { BookService } from '../services';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Book } from '../../types';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookResolver implements Resolve<Book> {
  constructor(private bs: BookService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Book | Observable<Book> | Promise<Book> {
    const id = Number(route.params.id);
    return this.bs.getBook(id);
  }
}
