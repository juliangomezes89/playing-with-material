import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtablaComponent } from './subtabla.component';

describe('SubtablaComponent', () => {
  let component: SubtablaComponent;
  let fixture: ComponentFixture<SubtablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
