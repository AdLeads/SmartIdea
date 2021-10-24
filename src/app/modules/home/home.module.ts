import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FeedComponent } from './pages/feed/feed.component';
import { PublicFeedComponent } from './pages/public-feed/public-feed.component';

@NgModule({
  declarations: [FeedComponent, PublicFeedComponent],
  imports: [CommonModule, SharedModule, MaterialModule, HomeRoutingModule],
})
export class HomeModule {}
