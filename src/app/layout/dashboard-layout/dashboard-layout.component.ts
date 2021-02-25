import { Component } from '@angular/core';
import { Pages } from '../../routing/pages';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html'
})
export class DashboardLayoutComponent {
  pages: { route: string, title: string, children?: { route: string, title: string }[] }[] = [
    {route: `/${Pages.DASHBOARD}`, title: 'Dashboard'},
    {
      route: `/${Pages.ARTICLES}`, title: 'Articles', children: [
        {route: `/${Pages.CREATE_ARTICLE}`, title: 'New Article'}
      ]
    },
    {route: `/${Pages.USERS}`, title: 'Users'},
    {route: `/${Pages.STATISTICS}`, title: 'Statistics'}
  ];
}
