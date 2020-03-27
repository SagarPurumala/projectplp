import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmsimulatorComponent } from './atmsimulator.component';

describe('AtmsimulatorComponent', () => {
  let component: AtmsimulatorComponent;
  let fixture: ComponentFixture<AtmsimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmsimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmsimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
