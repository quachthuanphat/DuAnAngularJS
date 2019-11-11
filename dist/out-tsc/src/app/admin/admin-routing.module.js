import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
const routes = [
    { path: "", component: AdminComponent }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AdminRoutingModule);
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map