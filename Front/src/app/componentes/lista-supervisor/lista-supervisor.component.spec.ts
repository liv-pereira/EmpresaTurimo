import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSupervisorComponent } from './lista-supervisor.component';

describe('ListaSupervisorComponent', () => {
  let component: ListaSupervisorComponent;
  let fixture: ComponentFixture<ListaSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSupervisorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
