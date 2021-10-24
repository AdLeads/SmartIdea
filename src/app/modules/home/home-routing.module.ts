import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './pages/feed/feed.component';
import { PublicFeedComponent } from './pages/public-feed/public-feed.component';

const routes: Routes = [
  {
    path: '',
    component: PublicFeedComponent,
  },
  {
    path: 'user',
    component: FeedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
