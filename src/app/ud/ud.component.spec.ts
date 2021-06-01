import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdComponent } from './ud.component';

describe('UdComponent', () => {
  let component: UdComponent;
  let fixture: ComponentFixture<UdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
