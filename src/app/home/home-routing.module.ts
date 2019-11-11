import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      // Routing Trang Chủ
      { path: "", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule" },
      { path: "trang-chu", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule"},
      { path: "chi-tiet-phim", loadChildren: "../home/chi-tiet-phim/chi-tiet-phim.module#ChiTietPhimModule"},
      { path: "phong-ve", loadChildren: "../home/phong-ve/phong-ve.module#PhongVeModule" }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
