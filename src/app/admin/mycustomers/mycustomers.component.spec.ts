import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycustomersComponent } from './mycustomers.component';

describe('MycustomersComponent', () => {
  let component: MycustomersComponent;
  let fixture: ComponentFixture<MycustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
