import * as tslib_1 from "tslib";
import { Component, } from '@angular/core';
let HeaderHomeComponent = class HeaderHomeComponent {
    constructor(BehaviorStore) {
        this.BehaviorStore = BehaviorStore;
        this.statusTemplate = true;
    }
    ngOnInit() {
        if (localStorage.getItem("userDangNhap")) {
            this.statusTemplate = false;
            this.informationUser = JSON.parse(localStorage.getItem("userDangNhap"));
            console.log(this.informationUser);
        }
        else {
            return;
        }
    }
    DangNhap() {
        let objectDN = { status: true };
        this.BehaviorStore.PushDataOnStoreForModal(objectDN);
    }
    DangKy() {
        let objectDK = { status: false };
        this.BehaviorStore.PushDataOnStoreForModal(objectDK);
    }
    LogOut() {
        localStorage.removeItem("userDangNhap");
        window.location.reload();
    }
};
HeaderHomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header-home',
        templateUrl: './header-home.component.html',
        styleUrls: ['./header-home.component.scss']
    })
], HeaderHomeComponent);
export { HeaderHomeComponent };
//# sourceMappingURL=header-home.component.js.map