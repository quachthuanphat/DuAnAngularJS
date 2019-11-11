import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../admin/admin.component';
let AdminModule = class AdminModule {
};
AdminModule = tslib_1.__decorate([
    NgModule({
        declarations: [AdminComponent],
        imports: [
            CommonModule,
            AdminRoutingModule
        ]
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map