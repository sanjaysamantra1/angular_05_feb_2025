import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1faviconComponent } from './demo1favicon.component';

describe('Demo1faviconComponent', () => {
  let component: Demo1faviconComponent;
  let fixture: ComponentFixture<Demo1faviconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demo1faviconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Demo1faviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
