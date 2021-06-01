import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcupcakeComponent } from './addnewcupcake.component';

describe('AddnewcupcakeComponent', () => {
  let component: AddnewcupcakeComponent;
  let fixture: ComponentFixture<AddnewcupcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewcupcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcupcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
