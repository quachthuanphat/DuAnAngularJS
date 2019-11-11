import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrangChuComponent } from './trang-chu.component';
const routes = [
    { path: "", component: TrangChuComponent, }
];
let TrangChuRoutingModule = class TrangChuRoutingModule {
};
TrangChuRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], TrangChuRoutingModule);
export { TrangChuRoutingModule };
//# sourceMappingURL=trang-chu-routing.module.js.map