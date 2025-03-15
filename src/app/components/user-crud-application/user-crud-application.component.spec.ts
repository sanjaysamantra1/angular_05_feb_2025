import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrudApplicationComponent } from './user-crud-application.component';

describe('UserCrudApplicationComponent', () => {
  let component: UserCrudApplicationComponent;
  let fixture: ComponentFixture<UserCrudApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCrudApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrudApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
