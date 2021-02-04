import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsListPage } from './locations-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocationsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsListPageRoutingModule {}
