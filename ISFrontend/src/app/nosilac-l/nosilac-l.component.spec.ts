import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosilacLComponent } from './nosilac-l.component';

describe('NosilacLComponent', () => {
  let component: NosilacLComponent;
  let fixture: ComponentFixture<NosilacLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosilacLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosilacLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
