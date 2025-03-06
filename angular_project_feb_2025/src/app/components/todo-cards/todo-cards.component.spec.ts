import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardsComponent } from './todo-cards.component';

describe('TodoCardsComponent', () => {
  let component: TodoCardsComponent;
  let fixture: ComponentFixture<TodoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
