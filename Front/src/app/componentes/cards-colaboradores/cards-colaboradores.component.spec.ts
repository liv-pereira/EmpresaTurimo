import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsColaboradoresComponent } from './cards-colaboradores.component';

describe('CardsColaboradoresComponent', () => {
  let component: CardsColaboradoresComponent;
  let fixture: ComponentFixture<CardsColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsColaboradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
