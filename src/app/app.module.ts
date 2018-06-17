import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { SettingsComponent } from './settings/settings.component';
import { LearnComponent } from './learn/learn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    SettingsComponent,
    LearnComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
