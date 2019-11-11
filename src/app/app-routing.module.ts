import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // Routing Home
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  // Routing Admin
  {path:"admin",loadChildren:"./admin/admin.module#AdminModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
