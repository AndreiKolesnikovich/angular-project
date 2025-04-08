import { Component, OnInit } from '@angular/core';
import { BookService, Book } from './../../../core/book.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  imports: [NgIf, NgFor]
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  isLoading = true; 
  errorMessage: string | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to fetch books', error);
        this.errorMessage = 'Could not load books.';
        this.isLoading = false;
      }
    });
  }
}