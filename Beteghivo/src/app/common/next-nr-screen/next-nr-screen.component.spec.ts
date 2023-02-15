import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextNrScreenComponent } from './next-nr-screen.component';

describe('NextNrScreenComponent', () => {
  let component: NextNrScreenComponent;
  let fixture: ComponentFixture<NextNrScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextNrScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextNrScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
