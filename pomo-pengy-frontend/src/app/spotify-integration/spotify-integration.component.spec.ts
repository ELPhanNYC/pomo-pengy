import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyIntegrationComponent } from './spotify-integration.component';

describe('SpotifyIntegrationComponent', () => {
  let component: SpotifyIntegrationComponent;
  let fixture: ComponentFixture<SpotifyIntegrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotifyIntegrationComponent]
    });
    fixture = TestBed.createComponent(SpotifyIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
