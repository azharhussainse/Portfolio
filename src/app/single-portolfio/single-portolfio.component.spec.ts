import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePortolfioComponent } from './single-portolfio.component';

describe('SinglePortolfioComponent', () => {
  let component: SinglePortolfioComponent;
  let fixture: ComponentFixture<SinglePortolfioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePortolfioComponent]
    });
    fixture = TestBed.createComponent(SinglePortolfioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
