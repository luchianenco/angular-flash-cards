import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ],
      imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatListModule, MatIconModule,
        MatButtonModule,
        RouterTestingModule,
        NoopAnimationsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
