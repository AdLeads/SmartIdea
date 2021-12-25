import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateComponent } from './pages/certificate/certificate.component';
import { CertificateContentComponent } from './components/certificate-content/certificate-content.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    CertificateComponent,
    CertificateContentComponent,
    CertificatesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CertificatesRoutingModule,
  ],
})
export class CertificatesModule {}
