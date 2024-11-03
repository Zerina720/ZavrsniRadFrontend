import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreirajIzboreComponent } from './kreiraj-izbore.component';

describe('KreirajIzboreComponent', () => {
  let component: KreirajIzboreComponent;
  let fixture: ComponentFixture<KreirajIzboreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KreirajIzboreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KreirajIzboreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
