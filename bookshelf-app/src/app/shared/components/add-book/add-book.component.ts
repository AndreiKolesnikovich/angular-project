import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BookService } from './../../../core/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  imports: [ReactiveFormsModule]
})

export class AddBookComponent {
  addBookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.addBookForm = this.fb.group({
      title: [''],
      author: [''],
      summary: [''],
      coverImage: ['']
    });
  }

  onSubmit() {
    console.log('onSubmit');
    if (this.addBookForm.valid) {
      this.bookService.addBook(this.addBookForm.value).subscribe(() => {
        alert('Book added successfully!');
        this.addBookForm.reset();
      });
    }
  }
}