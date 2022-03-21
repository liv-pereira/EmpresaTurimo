import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarContraChequeComponent } from './cadastrar-contra-cheque.component';

describe('CadastrarContraChequeComponent', () => {
  let component: CadastrarContraChequeComponent;
  let fixture: ComponentFixture<CadastrarContraChequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarContraChequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarContraChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
