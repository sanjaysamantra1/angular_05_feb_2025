import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSComponent } from './employee-s.component';

describe('EmployeeSComponent', () => {
  let component: EmployeeSComponent;
  let fixture: ComponentFixture<EmployeeSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
