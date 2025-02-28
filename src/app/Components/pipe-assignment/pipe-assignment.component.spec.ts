import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAssignmentComponent } from './pipe-assignment.component';

describe('PipeAssignmentComponent', () => {
  let component: PipeAssignmentComponent;
  let fixture: ComponentFixture<PipeAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
