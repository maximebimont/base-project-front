import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./feature/page/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./feature/page/about/about.component').then(m => m.AboutComponent) },
  { path: 'my-page', loadComponent: () => import('./feature/page/my-page/my-page.component').then(m => m.MyPageComponent) },
  { path: '**', redirectTo: 'home' },
];
