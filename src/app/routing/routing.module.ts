import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLayoutComponent } from '../layout/card-layout/card-layout.component';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';
import { MarketingLayoutComponent } from '../layout/marketing-layout/marketing-layout.component';
import { ArticlesComponent } from '../pages/articles/articles.component';
import { CreateArticleComponent } from '../pages/create-article/create-article.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { RegisterComponent } from '../pages/register/register.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { StatisticsComponent } from '../pages/statistics/statistics.component';
import { UsersComponent } from '../pages/users/users.component';
import { Pages } from './pages';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MarketingLayoutComponent, children: [
      {path: '', component: HomeComponent}
    ]
  }, {
    path: Pages.LOGIN, component: CardLayoutComponent, children: [
      {path: '', component: LoginComponent}
    ]
  }, {
    path: Pages.REGISTER, component: CardLayoutComponent, children: [
      {path: '', component: RegisterComponent}
    ]
  }, {
    path: '', component: DashboardLayoutComponent, children: [
      {path: Pages.ARTICLES, component: ArticlesComponent},
      {path: Pages.CREATE_ARTICLE, component: CreateArticleComponent},
      {path: Pages.DASHBOARD, component: DashboardComponent},
      {path: Pages.PROFILE, component: ProfileComponent},
      {path: Pages.SETTINGS, component: SettingsComponent},
      {path: Pages.STATISTICS, component: StatisticsComponent},
      {path: Pages.USERS, component: UsersComponent}
    ]
  }, {
    path: '**', component: CardLayoutComponent, children: [
      {path: '', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
