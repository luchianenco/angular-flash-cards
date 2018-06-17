import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { LearnComponent } from './learn/learn.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  {
    path: '',
    component: RecentlyAddedComponent
  },
  {
    path: 'learn',
    component: LearnComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
