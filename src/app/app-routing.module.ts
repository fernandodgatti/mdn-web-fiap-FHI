import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaLogadaComponent } from './views/area-logada/area-logada.component';
import { LoginComponent } from './views/login/login.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logada', component: AreaLogadaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
