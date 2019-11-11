import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
const routes = [
    { path: "", component: ChiTietPhimComponent }
];
let ChiTietPhimRoutingModule = class ChiTietPhimRoutingModule {
};
ChiTietPhimRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ChiTietPhimRoutingModule);
export { ChiTietPhimRoutingModule };
//# sourceMappingURL=chi-tiet-phim-routing.module.js.map