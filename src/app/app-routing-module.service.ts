import {  NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';





const routes : Routes = [
  {
    path : '',
    component : AdminPanelComponent,
    pathMatch : 'full'
  }
]

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports : [RouterModule]
  
})

export class AppRoutingModuleService {


}
