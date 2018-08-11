import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoleProprietorMstComponent } from './sole-proprietor-mst/sole-proprietor-mst.component';
import { SoleProprietorDetailComponent } from './sole-proprietor-detail/sole-proprietor-detail.component';
import { SoleProprietorFilterComponent } from './sole-proprietor-filter/sole-proprietor-filter.component';

const routes: Routes = [
	{path: '', redirectTo: 'owners', pathMatch: 'full'},
	{path: 'detail/:id', component: SoleProprietorDetailComponent},
	{path: 'owners', component: SoleProprietorMstComponent},
	{path: 'registered', component: SoleProprietorFilterComponent},
	{path: 'unregistered', component: SoleProprietorFilterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
