import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ItemPhimComponent = class ItemPhimComponent {
    constructor() {
        this.shareLink = new EventEmitter();
    }
    ngOnInit() {
    }
    // Đẩy link trailer để mở Modal
    MoTrailer() {
        this.shareLink.emit(this.object.trailer);
    }
    // Function For Button "Dat Ve"
    _DatVe() {
        console.log(this.object);
    }
};
tslib_1.__decorate([
    Input()
], ItemPhimComponent.prototype, "object", void 0);
tslib_1.__decorate([
    Output()
], ItemPhimComponent.prototype, "shareLink", void 0);
ItemPhimComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-phim',
        templateUrl: './item-phim.component.html',
        styleUrls: ['./item-phim.component.scss']
    })
], ItemPhimComponent);
export { ItemPhimComponent };
//# sourceMappingURL=item-phim.component.js.map