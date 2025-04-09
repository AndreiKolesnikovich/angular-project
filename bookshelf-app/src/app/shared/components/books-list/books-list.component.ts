import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { BookService, Book } from './../../../core/book.service';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  imports: [NgIf, NgFor, ReactiveFormsModule, BookComponent]
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  authors: string[] = [];
  isLoading = true; 
  errorMessage: string | null = null;

  filterForm: FormGroup = new FormGroup({});
  filteredAuthors: Observable<string[]> | undefined;

  searchQuery: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private bookService: BookService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      author: [''],
      titleSearch: ['']
    });
  }

  ngOnInit(): void {
    this.fetchBooks();
    this.fetchAuthors();
    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilterAndSort();
    });
    this.filteredAuthors = this.filterForm.get('author')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterAuthors(value))
    );
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.filteredBooks = books;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to fetch books', error);
        this.errorMessage = 'Could not load books.';
        this.isLoading = false;
      }
    });
  }

  fetchAuthors(): void {
    this.bookService.getAuthors().subscribe({
      next: (authors) => {
        this.authors = authors;
      },
      error: (error) => {
        console.error('Failed to fetch authors', error);
        this.errorMessage = 'Could not load authors.';
      }
    });
  }

  applyFilterAndSort() {
    const { author, titleSearch } = this.filterForm.value;

    this.filteredBooks = this.books.filter(book => 
      (author === '' || book.author.toLowerCase().includes(author.toLowerCase())) &&
      (titleSearch === '' || book.title.toLowerCase().includes(titleSearch.toLowerCase()))
    );

    this.filteredBooks.sort((a, b) => {
      if (this.sortDirection === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  }

  private _filterAuthors(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.authors.filter(author => author.toLowerCase().includes(filterValue));
  }

  toggleSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.applyFilterAndSort();
  }
}