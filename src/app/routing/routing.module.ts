import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { Pages } from './pages';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},

  {path: Pages.ARTICLES, component: LoginComponent},
  {path: Pages.CREATE_ARTICLE, component: LoginComponent},
  {path: Pages.DASHBOARD, component: LoginComponent},
  {path: Pages.LOGIN, component: LoginComponent},
  {path: Pages.PROFILE, component: LoginComponent},
  {path: Pages.REGISTER, component: LoginComponent},
  {path: Pages.SETTINGS, component: LoginComponent},
  {path: Pages.STATISTICS, component: LoginComponent},
  {path: Pages.USERS, component: LoginComponent},

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
