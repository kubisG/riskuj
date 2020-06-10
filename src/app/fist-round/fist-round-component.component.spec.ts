import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FistRoundComponentComponent } from './fist-round-component.component';

describe('FistRoundComponentComponent', () => {
  let component: FistRoundComponentComponent;
  let fixture: ComponentFixture<FistRoundComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistRoundComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistRoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
