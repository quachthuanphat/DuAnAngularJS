import { Component, OnInit } from "@angular/core";
import { BehaviorService } from "../../_core/service/behavior.service";
import { DataService } from "../../_core/service/data.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import $ from "jquery";
declare var $: any;
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  statusModal: boolean;

  constructor(
    private BehaviorService: BehaviorService,
    private DataService: DataService,
    private _snackBar: MatSnackBar
  ) {}

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
    this.DataService.Post(uri, user).subscribe(
      data => {
        console.log(data);
        // Lưu dữ liệu vào local Storage
        localStorage.setItem("userDangNhap", JSON.stringify(data));
        localStorage.setItem("tokenUser", JSON.stringify(data.accessToken));
        // Tắt Modal và đẩy dữ liệu lên behavior store
        this.BehaviorService.PushDataSuccessOnStore({ dataUser: data,status:false});
        $(function() {
          $("#myModal").modal("toggle");
        });
      },
      err => {
        // SnackBar Optional
        let config = new MatSnackBarConfig();
        config.duration = 2000;
        // config.panelClass = ['css-snackbar']
        this._snackBar.open("Mật khẩu hoặc tài khoản không đúng", "", config);
      }
    );
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
      maLoaiNguoiDung: "KhachHang"
    };
    this.DataService.Post(uri, user).subscribe(
      data => {
        let config = new MatSnackBarConfig();
        config.duration = 5000;
        this._snackBar.open("Đăng ký thành công", "", config);
        localStorage.setItem("userDangNhap", JSON.stringify(data));
        localStorage.setItem("tokenUser", JSON.stringify(data.accessToken));
        this.BehaviorService.PushDataSuccessOnStore({ dataUser: data,status:false});
        $(function() {
          $("#myModal").modal("toggle");
        });
      },
      err => {
        // SnackBar Optional
        let config = new MatSnackBarConfig();
        config.duration = 2000;
        this._snackBar.open(err.error, "", config);
      }
    );
  }
}
