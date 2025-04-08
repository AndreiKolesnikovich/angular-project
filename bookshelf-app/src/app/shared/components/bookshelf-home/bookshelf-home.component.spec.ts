import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfHomeComponent } from './bookshelf-home.component';

describe('BookshelfHomeComponent', () => {
  let component: BookshelfHomeComponent;
  let fixture: ComponentFixture<BookshelfHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookshelfHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookshelfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
