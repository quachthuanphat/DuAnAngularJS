import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietPhimRoutingModule } from './chi-tiet-phim-routing.module';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
let ChiTietPhimModule = class ChiTietPhimModule {
};
ChiTietPhimModule = tslib_1.__decorate([
    NgModule({
        declarations: [ChiTietPhimComponent],
        imports: [
            CommonModule,
            ChiTietPhimRoutingModule
        ],
        exports: [ChiTietPhimComponent]
    })
], ChiTietPhimModule);
export { ChiTietPhimModule };
//# sourceMappingURL=chi-tiet-phim.module.js.map