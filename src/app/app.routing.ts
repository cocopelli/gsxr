import {Routes, RouterModule} from '@angular/router';

import {TerritoryComponent} from './territory/territory.component';

export const appRoutes: Routes = [
  {
    path: 'territories',
    component: TerritoryComponent,
  },
  {
    path: '',
    redirectTo: '/territories',
    pathMatch: 'full'
  },
];

export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [TerritoryComponent];
