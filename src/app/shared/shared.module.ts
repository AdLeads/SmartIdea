import { CreateCertificateComponent } from 'src/app/shared/components/dialogs/create-certificate/create-certificate.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SideBarComponent } from '../layout/side-bar/side-bar.component';
import { MainComponent } from '../layout/main/main.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WarningDialogComponent } from './components/dialogs/warning-dialog/warning-dialog.component';
import { EditSkillComponent } from './components/dialogs/edit-skill/edit-skill.component';
import { CreateSkillComponent } from './components/dialogs/create-skill/create-skill.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    MainComponent,
    WarningDialogComponent,
    EditSkillComponent,
    CreateSkillComponent,
    CreateCertificateComponent,
  ],
  exports: [FooterComponent, HeaderComponent, SideBarComponent, MainComponent],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
