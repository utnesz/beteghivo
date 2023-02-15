import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalScreenComponent } from './local-screen.component';

describe('LocalScreenComponent', () => {
  let component: LocalScreenComponent;
  let fixture: ComponentFixture<LocalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
