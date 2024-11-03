import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIzboriComponent } from './admin-izbori.component';

describe('AdminIzboriComponent', () => {
  let component: AdminIzboriComponent;
  let fixture: ComponentFixture<AdminIzboriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIzboriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIzboriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
