import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirContraChequeComponent } from './excluir-contra-cheque.component';

describe('ExcluirContraChequeComponent', () => {
  let component: ExcluirContraChequeComponent;
  let fixture: ComponentFixture<ExcluirContraChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirContraChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirContraChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
