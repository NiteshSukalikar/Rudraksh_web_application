import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/main',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: '/home/main',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
