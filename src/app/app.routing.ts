import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {ClassDetailsComponent} from './components/classDetails/classDetails.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
    {
    path:'classes/:id',
    component:ClassDetailsComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
