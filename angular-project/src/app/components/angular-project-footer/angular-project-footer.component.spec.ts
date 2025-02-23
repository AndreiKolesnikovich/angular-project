import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProjectFooterComponent } from './angular-project-footer.component';

describe('AngularProjectFooterComponent', () => {
  let component: AngularProjectFooterComponent;
  let fixture: ComponentFixture<AngularProjectFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularProjectFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularProjectFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
