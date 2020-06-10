import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalRoundComponentComponent } from './final-round-component.component';

describe('FinalRoundComponentComponent', () => {
  let component: FinalRoundComponentComponent;
  let fixture: ComponentFixture<FinalRoundComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalRoundComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalRoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
