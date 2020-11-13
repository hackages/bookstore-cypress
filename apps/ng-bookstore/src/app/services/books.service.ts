import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { switchMap, startWith } from "rxjs/operators";
import { Book } from "./../../types/book";
@Injectable({ providedIn: "root" })
export class BookService {
  booksUrl = "/api/books";
  searchByTitleUrl = "app/books/?title=";
  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}

  // Gets all the books from our mock server
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  search(term$: Observable<string>): Observable<Book[]> {
    return term$.pipe(
      switchMap(term => this.http.get<Book[]>(this.searchByTitleUrl + term))
    );
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.booksUrl}/${id}`);
  }

  // Adds a new book and re-fetch the list of books.
  create(title: string): Observable<Book[]> {
    throw new Error("Oops. Not yet implemented...");
  }

  // Delete a book and re-fetch the list of books.
  delete(id: number): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    throw new Error("Oops. Not yet implemented...");
  }

  // Update a book and re-fetch the list of books.
  update({ id, title }): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    throw new Error("Oops. Not yet implemented...");
  }
}
