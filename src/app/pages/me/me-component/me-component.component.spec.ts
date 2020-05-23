import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeComponentComponent } from './me-component.component';

describe('MeComponentComponent', () => {
  let component: MeComponentComponent;
  let fixture: ComponentFixture<MeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
