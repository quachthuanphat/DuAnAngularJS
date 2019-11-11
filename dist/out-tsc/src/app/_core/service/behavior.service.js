import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let BehaviorService = class BehaviorService {
    constructor() {
        // 1. BEHAVIOR CHO TEMPLATE ĐĂNG NHẬP - ĐĂNG KÝ
        // Tạo store Behavior
        this.dataBehaviorModal = new BehaviorSubject({});
        this.dataModal = this.dataBehaviorModal.asObservable();
    }
    // Hàm đẩy dữ liệu lên store
    PushDataOnStoreForModal(value) {
        this.dataBehaviorModal.next(value);
    }
};
BehaviorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], BehaviorService);
export { BehaviorService };
//# sourceMappingURL=behavior.service.js.map