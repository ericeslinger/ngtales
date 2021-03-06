import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { CampaignComponent } from './pages/campaign/campaign.component';
import { ViewComponent as CampaignViewComponent } from './components/campaigns/view/view.component';
import { LoginComponent } from './components/user/login.component';
import { NgModule } from '@angular/core';
import { RulesComponent } from './components/pages/static/rules.component';
import { RouteComponent as UserViewRouteComponent } from './components/user/view/route.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'campaigns/:campaignId',
    component: CampaignComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
  },
  {
    path: 'campaigns/:campaignId/live',
    component: CampaignViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
  },
  {
    path: 'users',
    component: UserViewRouteComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
  },
  {
    path: 'users/:userId',
    component: UserViewRouteComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo(['login']) },
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [{ path: ':after', component: LoginComponent }],
  },
  { path: 'rules', component: RulesComponent },
  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
