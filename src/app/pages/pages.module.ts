import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UsersComponent } from './users/users.component';

const COMPONENTS = [
  ArticlesComponent,
  CreateArticleComponent,
  DashboardComponent,
  HomeComponent,
  LoginComponent,
  NotFoundComponent,
  ProfileComponent,
  RegisterComponent,
  SettingsComponent,
  StatisticsComponent,
  UsersComponent
];

@NgModule({
  imports: [],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class PagesModule {
}
