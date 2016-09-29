import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {ClassComponent} from './components/class/class.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path:'classes/:id',
    component:ClassComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
