import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeassignmentComponent } from './pipeassignment.component';

describe('PipeassignmentComponent', () => {
  let component: PipeassignmentComponent;
  let fixture: ComponentFixture<PipeassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeassignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
