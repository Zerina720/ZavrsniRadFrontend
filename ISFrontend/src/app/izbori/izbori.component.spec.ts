import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzboriComponent } from './izbori.component';

describe('IzboriComponent', () => {
  let component: IzboriComponent;
  let fixture: ComponentFixture<IzboriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzboriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzboriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
