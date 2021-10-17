import { SignupComponent } from './modules/home/pages/signup/signup.component';
import { CertificateContentComponent } from './modules/components/certificate-content/certificate-content.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { CertificateComponent } from './modules/home/pages/certificate/certificate.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { MyprojectsComponent } from './modules/home/pages/myprojects/myprojects.component';
import { ReferencesComponent } from './modules/home/pages/references/references.component';
import { ReferenceByIdComponent } from './modules/home/pages/reference-by-id/reference-by-id.component';
import { FeedComponent } from './modules/home/pages/feed/feed.component';
import { UserComponent } from './modules/home/pages/user/user.component';
import { OrderReviewComponent } from './modules/home/pages/orderReview/orderReview.component';
import { UserrequesteComponent } from './modules/home/pages/userrequeste/userrequeste.component';
import { ProjectPreviewOwnerComponent } from './modules/home/pages/project-preview-owner/project-preview-owner.component';
import { UserInProjectComponent } from './modules/home/pages/user-in-project/user-in-project.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/feed',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'user',
    component: MainComponent,
    children: [
      {
        path: 'myprojects',
        component: MyprojectsComponent,
      },
      {
        path: 'feed',
        component: FeedComponent,
      },
      {
        path: 'certificate',
        component: CertificateComponent,
      },
      {
        path: 'certificate/:id',
        component: CertificateContentComponent,
      },
      {
        path: 'references',
        component: ReferencesComponent,
      },
      {
        path: 'referencesbyId/:id',
        component: ReferenceByIdComponent,
      },
      {
        path: 'projectsOwner/:id',
        component: ProjectPreviewOwnerComponent,
      },
      {
        path: 'profile',
        component: UserComponent,
      },
      {
        path: 'project',
        children: [
          {
            path: ':id/paymentPlanBuy/:pid/orderReview/:cid',
            component: OrderReviewComponent,
          },
          {
            path: 'users/:idproject',
            component: UserInProjectComponent,
          },
        ],
      },
      {
        path: 'userRequest/:id',
        component: UserrequesteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
