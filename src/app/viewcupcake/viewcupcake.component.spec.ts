import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcupcakeComponent } from './viewcupcake.component';

describe('ViewcupcakeComponent', () => {
  let component: ViewcupcakeComponent;
  let fixture: ComponentFixture<ViewcupcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcupcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcupcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
