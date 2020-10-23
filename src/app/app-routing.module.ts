import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopPageComponent } from './top-page/top-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: TopPageComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export const AppRouting: ModuleWithProviders<RouterModule> = RouterModule.forRoot(
  APP_ROUTES,
  {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }
);
