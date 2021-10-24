import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SideBarComponent } from '../layout/side-bar/side-bar.component';
import { MainComponent } from '../layout/main/main.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    MainComponent,
  ],
  exports: [FooterComponent, HeaderComponent, SideBarComponent, MainComponent],
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
