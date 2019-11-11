import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoaiPhimComponent = class LoaiPhimComponent {
    constructor() {
        this.statusPhimDangChieu = true;
        this.statusPhimSapChieu = false;
    }
    ngOnInit() {
    }
    DoiSangPhimSapChieu() {
        this.statusPhimDangChieu = !this.statusPhimDangChieu;
        this.statusPhimSapChieu = !this.statusPhimSapChieu;
    }
    DoiLoaiPhimDangChieu() {
        this.statusPhimDangChieu = !this.statusPhimDangChieu;
        this.statusPhimSapChieu = !this.statusPhimSapChieu;
    }
};
LoaiPhimComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loai-phim',
        templateUrl: './loai-phim.component.html',
        styleUrls: ['./loai-phim.component.scss']
    })
], LoaiPhimComponent);
export { LoaiPhimComponent };
//# sourceMappingURL=loai-phim.component.js.map