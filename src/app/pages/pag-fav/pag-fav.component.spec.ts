import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFavComponent } from './pag-fav.component';

describe('PagFavComponent', () => {
  let component: PagFavComponent;
  let fixture: ComponentFixture<PagFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagFavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
