import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCommentsComponent } from './pop-comments.component';

describe('PopCommentsComponent', () => {
  let component: PopCommentsComponent;
  let fixture: ComponentFixture<PopCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
