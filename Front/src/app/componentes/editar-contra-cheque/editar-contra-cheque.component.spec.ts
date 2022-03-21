import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContraChequeComponent } from './editar-contra-cheque.component';

describe('EditarContraChequeComponent', () => {
  let component: EditarContraChequeComponent;
  let fixture: ComponentFixture<EditarContraChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContraChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarContraChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
