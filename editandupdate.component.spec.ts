import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditandupdateComponent } from './editandupdate.component';

describe('EditandupdateComponent', () => {
  let component: EditandupdateComponent;
  let fixture: ComponentFixture<EditandupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditandupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditandupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
