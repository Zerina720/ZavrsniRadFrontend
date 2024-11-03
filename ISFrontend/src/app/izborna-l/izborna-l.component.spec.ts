import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzbornaLComponent } from './izborna-l.component';

describe('IzbornaLComponent', () => {
  let component: IzbornaLComponent;
  let fixture: ComponentFixture<IzbornaLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzbornaLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzbornaLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
