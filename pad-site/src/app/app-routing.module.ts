import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonsterListComponent } from './monster-list/monster-list.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/monster-list',
		pathMatch: 'full'
	},
	{
		path: 'monster-list',
		component: MonsterListComponent
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}