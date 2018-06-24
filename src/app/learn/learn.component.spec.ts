import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from './learn.component';
import {FormsModule} from '@angular/forms';

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
