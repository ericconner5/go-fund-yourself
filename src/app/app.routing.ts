import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignArchiveComponent } from './campaign-archive/campaign-archive.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CampaignArchiveComponent
  },
  {
    path: 'campaigns/$key',
    component: CampaignDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
