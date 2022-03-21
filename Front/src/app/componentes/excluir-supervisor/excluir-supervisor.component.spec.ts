import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirSupervisorComponent } from './excluir-supervisor.component';

describe('ExcluirSupervisorComponent', () => {
  let component: ExcluirSupervisorComponent;
  let fixture: ComponentFixture<ExcluirSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
