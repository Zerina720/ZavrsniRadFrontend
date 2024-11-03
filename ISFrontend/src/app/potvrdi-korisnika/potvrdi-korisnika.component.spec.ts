import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotvrdiKorisnikaComponent } from './potvrdi-korisnika.component';

describe('PotvrdiKorisnikaComponent', () => {
  let component: PotvrdiKorisnikaComponent;
  let fixture: ComponentFixture<PotvrdiKorisnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotvrdiKorisnikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotvrdiKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
