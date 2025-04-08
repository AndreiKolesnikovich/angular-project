import { Component } from '@angular/core';
import { BooksListComponent } from '../books-list/books-list.component';

@Component({
  selector: 'app-bookshelf-home',
  templateUrl: './bookshelf-home.component.html',
  styleUrls: ['./bookshelf-home.component.scss'],
  imports: [BooksListComponent]
})
export class BookshelfHomeComponent {}