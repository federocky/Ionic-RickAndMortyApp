import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationsListPageRoutingModule } from './locations-list-routing.module';

import { LocationsListPage } from './locations-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationsListPageRoutingModule
  ],
  declarations: [LocationsListPage]
})
export class LocationsListPageModule {}
