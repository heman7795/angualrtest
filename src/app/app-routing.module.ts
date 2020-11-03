import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileviewComponent } from './profileview/profileview.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileviewComponent},
  {path:'',redirectTo:'dashboard', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
