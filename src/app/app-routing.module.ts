import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/user',
        pathMatch: 'full',
      },
      //   // {
      //   //   path: 'feed',
      //   //   loadChildren: () =>
      //   //     import('./modules/home/home.module').then((m) => m.HomeModule),
      //   // },
      //   // {
      //   //   path: 'certificates',
      //   //   // canActivate: [UserGuard],
      //   //   loadChildren: () =>
      //   //     import('./modules/certificates/certificates.module').then(
      //   //       (m) => m.CertificatesModule
      //   //     ),
      //   // },
      //   // {
      //   //   path: 'projects',
      //   //   // canActivate: [UserGuard],
      //   //   loadChildren: () =>
      //   //     import('./modules/projects/projects.module').then(
      //   //       (m) => m.ProjectsModule
      //   //     ),
      //   // },
      //   // {
      //   //   path: 'profile',
      //   //   // canActivate: [UserGuard],
      //   //   loadChildren: () =>
      //   //     import('./modules/user/user.module').then((m) => m.UserModule),
      //   // },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: '**',
  //   redirectTo: '/inicio',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
