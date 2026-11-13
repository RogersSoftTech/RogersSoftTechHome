import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./home').then((module) => module.Home), title: 'Rogers Soft Tech | Home' },
];
