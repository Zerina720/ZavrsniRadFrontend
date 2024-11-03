import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajListuComponent } from './kreiraj-listu.component';

describe('KreirajListuComponent', () => {
  let component: KreirajListuComponent;
  let fixture: ComponentFixture<KreirajListuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KreirajListuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KreirajListuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
