import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
const routes = [
    {
        path: "", component: HomeComponent, children: [
            // Routing Trang Chủ
            { path: "", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule" },
            { path: "trang-chu", loadChildren: "./trang-chu/trang-chu.module#TrangChuModule" },
            { path: "chi-tiet-phim", loadChildren: "../home/chi-tiet-phim/chi-tiet-phim.module#ChiTietPhimModule" }
        ]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], HomeRoutingModule);
export { HomeRoutingModule };
//# sourceMappingURL=home-routing.module.js.map