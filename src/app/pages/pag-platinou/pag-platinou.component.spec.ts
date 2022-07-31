import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPlatinouComponent } from './pag-platinou.component';

describe('PagPlatinouComponent', () => {
  let component: PagPlatinouComponent;
  let fixture: ComponentFixture<PagPlatinouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPlatinouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPlatinouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
