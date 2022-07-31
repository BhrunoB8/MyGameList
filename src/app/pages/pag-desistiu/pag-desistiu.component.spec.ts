import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagDesistiuComponent } from './pag-desistiu.component';

describe('PagDesistiuComponent', () => {
  let component: PagDesistiuComponent;
  let fixture: ComponentFixture<PagDesistiuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagDesistiuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagDesistiuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
