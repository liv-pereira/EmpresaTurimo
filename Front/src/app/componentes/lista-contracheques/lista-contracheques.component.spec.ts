import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContrachequesComponent } from './lista-contracheques.component';

describe('ListaContrachequesComponent', () => {
  let component: ListaContrachequesComponent;
  let fixture: ComponentFixture<ListaContrachequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContrachequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContrachequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
