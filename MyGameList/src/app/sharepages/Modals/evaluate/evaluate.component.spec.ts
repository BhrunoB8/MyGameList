import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:MyGameList/src/app/sharepages/Modals/evaluate/evaluate.component.spec.ts
import { EvaluateComponent } from './evaluate.component';

describe('EvaluateComponent', () => {
  let component: EvaluateComponent;
  let fixture: ComponentFixture<EvaluateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateComponent ]
========
import { PagFavComponent } from './pag-fav.component';

describe('PagFavComponent', () => {
  let component: PagFavComponent;
  let fixture: ComponentFixture<PagFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagFavComponent ]
>>>>>>>> 77050359e40bda598921eb53467bc1ac8e54424b:MyGameList/src/app/pages/pag-fav/pag-fav.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:MyGameList/src/app/sharepages/Modals/evaluate/evaluate.component.spec.ts
    fixture = TestBed.createComponent(EvaluateComponent);
========
    fixture = TestBed.createComponent(PagFavComponent);
>>>>>>>> 77050359e40bda598921eb53467bc1ac8e54424b:MyGameList/src/app/pages/pag-fav/pag-fav.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
