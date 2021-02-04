import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-list/:id',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'locations-list/:id',
    loadChildren: () => import('./pages/locations-list/locations-list.module').then( m => m.LocationsListPageModule)
  },
  {
    path: 'episodes-list/:id',
    loadChildren: () => import('./pages/episodes-list/episodes-list.module').then( m => m.EpisodesListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
