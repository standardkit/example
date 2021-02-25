import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { MarketingLayoutComponent } from './marketing-layout/marketing-layout.component';

const LAYOUTS = [
  CardLayoutComponent,
  DashboardLayoutComponent,
  MarketingLayoutComponent
];

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: LAYOUTS,
  exports: LAYOUTS
})
export class LayoutModule {
}
