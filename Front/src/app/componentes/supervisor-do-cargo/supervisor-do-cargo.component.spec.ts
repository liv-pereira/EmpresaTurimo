import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorDoCargoComponent } from './supervisor-do-cargo.component';

describe('SupervisorDoCargoComponent', () => {
  let component: SupervisorDoCargoComponent;
  let fixture: ComponentFixture<SupervisorDoCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorDoCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorDoCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
