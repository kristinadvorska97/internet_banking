import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicAccountsModule } from './basic-accounts/basic-accounts.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'basic-accounts', loadChildren: () => import('./basic-accounts/basic-accounts.module').then(ch => ch.BasicAccountsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
