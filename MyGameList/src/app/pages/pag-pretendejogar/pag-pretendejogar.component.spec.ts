import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPretendejogarComponent } from './pag-pretendejogar.component';

describe('PagPretendejogarComponent', () => {
  let component: PagPretendejogarComponent;
  let fixture: ComponentFixture<PagPretendejogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPretendejogarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPretendejogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
