import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectHeaderComponent } from './angular-project-header.component';

describe('AngularProjectHeaderComponent', () => {
  let component: AngularProjectHeaderComponent;
  let fixture: ComponentFixture<AngularProjectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularProjectHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
