import * as tslib_1 from "tslib";
import { Component, } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
let ModalComponent = class ModalComponent {
    constructor(BehaviorService, DataService, _snackBar) {
        this.BehaviorService = BehaviorService;
        this.DataService = DataService;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.BehaviorService.dataModal.subscribe(data => {
            this.statusModal = data.status;
        });
    }
    // Xử lý đăng nhập
    DangNhap(formDangNhap) {
        let user = {
            taiKhoan: formDangNhap.taiKhoan,
            matKhau: formDangNhap.matKhau
        };
        const uri = "QuanLyNguoiDung/DangNhap";
        this.DataService.Post(uri, user).subscribe(data => {
            // Lưu dữ liệu vào local Storage
            localStorage.setItem("userDangNhap", JSON.stringify(data));
            // Tắt Modal
            window.location.reload();
        }, err => {
            // SnackBar Optional
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            // config.panelClass = ['css-snackbar']
            this._snackBar.open("Mật khẩu hoặc tài khoản không đúng", "", config);
        });
    }
    // Xử lý đăng ký
    DangKy(formDangKy) {
        const uri = "QuanLyNguoiDung/DangKy";
        let user = {
            taiKhoan: formDangKy.taiKhoan,
            matKhau: formDangKy.matKhau,
            email: formDangKy.email,
            soDt: formDangKy.soDt,
            hoTen: formDangKy.hoTen,
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
        };
        this.DataService.Post(uri, user).subscribe(data => {
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            this._snackBar.open("Đăng ký thành công", "", config);
            $('#myModal').modal('toggle');
        }, err => {
            // SnackBar Optional
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            this._snackBar.open(err.error, "", config);
        });
    }
};
ModalComponent = tslib_1.__decorate([
    Component({
        selector: 'app-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.scss']
    })
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map