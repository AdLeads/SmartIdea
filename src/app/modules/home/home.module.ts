import { CreateCertificateComponent } from './../components/dialogs/create-certificate/create-certificate.component';
import { CertificateContentComponent } from './../components/certificate-content/certificate-content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { ReferencesComponent } from './pages/references/references.component';
import { MyprojectsComponent } from './pages/myprojects/myprojects.component';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { CertificatesComponent } from '../components/certificates/certificates.component';
import { ReferenceByIdComponent } from './pages/reference-by-id/reference-by-id.component';
import { FeedComponent } from './pages/feed/feed.component';
import { UserComponent } from './pages/user/user.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WarningDialogComponent } from '../components/dialogs/warning-dialog/warning-dialog.component';
import { CreateSkillComponent } from '../components/dialogs/create-skill/create-skill.component';
import { EditSkillComponent } from '../components/dialogs/edit-skill/edit-skill.component';
import { CreateProjectComponent } from '../components/dialogs/create-project/create-project.component';
import { EditProjectComponent } from '../components/dialogs/edit-project/edit-project.component';
import { UserrequesteComponent } from './pages/userrequeste/userrequeste.component';
import { OrderReviewComponent } from './pages/orderReview/orderReview.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotificationDetailsComponent } from '../components/dialogs/notification-details/notification-details.component';
import { AreacreateDialogComponent } from '../components/dialogs/areacreate-dialog/areacreate-dialog.component';
import { AreaeditDialogComponent } from '../components/dialogs/areaedit-dialog/areaedit-dialog.component';
import { UserInProjectComponent } from './pages/user-in-project/user-in-project.component';
import { ProjectPreviewOwnerComponent } from './pages/project-preview-owner/project-preview-owner.component';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { CreditCardPipe } from 'src/app/shared/pipes/credit-card.pipe';
import { FilterRespuestaPipe } from 'src/app/shared/pipes/filter-respuesta.pipe';
import { CountRespCorrectasPipe } from 'src/app/shared/pipes/count-resp-correctas.pipe';
import { NotaFinalPipe } from 'src/app/shared/pipes/nota-final.pipe';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ReferencesComponent,
    MyprojectsComponent,
    CertificateComponent,
    CertificateContentComponent,
    CertificatesComponent,
    ReferenceByIdComponent,
    FeedComponent,
    EditProjectComponent,
    UserComponent,
    CreateCertificateComponent,
    WarningDialogComponent,
    CreateSkillComponent,
    EditSkillComponent,
    CreateProjectComponent,
    UserrequesteComponent,
    OrderReviewComponent,
    CreditCardPipe,
    SignupComponent,
    NotificationDetailsComponent,
    AreacreateDialogComponent,
    AreaeditDialogComponent,
    UserInProjectComponent,
    ProjectPreviewOwnerComponent,
    SearchPipe,
    FilterRespuestaPipe,
    CountRespCorrectasPipe,
    NotaFinalPipe,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
  entryComponents: [
    CreateCertificateComponent,
    WarningDialogComponent,
    EditSkillComponent,
    CreateProjectComponent,
    EditProjectComponent,
    SignupComponent,
    LoginComponent,
    AreacreateDialogComponent,
    AreaeditDialogComponent,
  ],
})
export class HomeModule {}
