import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PomoPageComponent } from './pomo-page.component';

describe('PomoPageComponent', () => {
  let component: PomoPageComponent;
  let fixture: ComponentFixture<PomoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PomoPageComponent]
    });
    fixture = TestBed.createComponent(PomoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
