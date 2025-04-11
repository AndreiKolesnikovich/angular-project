import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Genre } from './genre.enum';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GenreComponent),
      multi: true
    }
  ],
  imports : [NgFor, FormsModule]
})
export class GenreComponent implements ControlValueAccessor {
  genres = Object.values(Genre);
  selectedGenre: Genre | null = null;

  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: Genre): void {
    this.selectedGenre = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setGenre(value: Genre | null) {
    this.selectedGenre = value;
    this.onChange(value);
    this.onTouched();
  }
}