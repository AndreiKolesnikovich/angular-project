import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Book {
  id: string = ''; 
  title: string = '';
  author: string = '';
  genre: Genre = Genre.Unknown;
  coverImage: string = ''; 
}

export enum Genre {
    Fiction = 'Fiction',
    NonFiction = 'Non-Fiction',
    Mystery = 'Mystery',
    Fantasy = 'Fantasy',
    Biography = 'Biography',
    ScienceFiction = 'Science Fiction',
    Romance = 'Romance',
    Thriller = 'Thriller',
    History = 'History',
    Unknown = 'Unknown'
  }

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  getAuthors(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl+"?author");
  }
}