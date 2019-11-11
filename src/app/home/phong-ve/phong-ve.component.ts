import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../_core/service/data.service";
import { ItemGheComponent } from "./item-ghe/item-ghe.component";
import { MatSnackBarConfig, MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
@Component({
  selector: "app-phong-ve",
  templateUrl: "./phong-ve.component.html",
  styleUrls: ["./phong-ve.component.scss"]
})
export class PhongVeComponent implements OnInit {
  @ViewChildren(ItemGheComponent) ListComponentItemGhe: QueryList<
    ItemGheComponent
  >;
  maLichChieu: number;
  dataAPI: any;
  giaVe: any;
  soVe: number;
  soLanChon: number;
  danhSachGheDangChon = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.soVe = 0;
    this.soLanChon = 0;
    this._CallApi();
  }

  // Function Call API With Parameter From URL
  _CallApi = () => {
    this.activatedRoute.queryParams.subscribe(param => {
      this.maLichChieu = param.maLichChieu;
      this.giaVe = param.giaVe;
      // console.log(this.maLichChieu);
      const uri = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLichChieu}`;
      this.dataService.Get(uri).subscribe(data => {
        this.dataAPI = data;
        console.log(this.dataAPI);
      });
    });
  };

  // Function Tang Ve
  TangVe = () => {
    this.soVe = this.soVe + 1;
    this.soLanChon = this.soLanChon + 1;
    console.log(this.soLanChon);
  };

  // Function Giam Ve
  GiamVe = () => {
    this.soVe = this.soVe - 1;
    this.soLanChon = this.soLanChon - 1;
    console.log(this.soLanChon);
  };

  // Function Chon Ghe
  ChonGhe = value => {
    if (value.statusChair === true) {
      this.danhSachGheDangChon.push(value.objectChair);
      console.log(this.danhSachGheDangChon);
      this.soLanChon = this.soLanChon - 1;
      if (this.soLanChon === 0) {
        this.ListComponentItemGhe.map(item => {
          if (item.statusGhe === false) {
            item.ActiveDisableChair(true);
          }
        });
      }
    } else {
      const index = this.danhSachGheDangChon.indexOf(
        item => item.maGhe === value.objectGhe.maGhe
      );
      this, this.danhSachGheDangChon.splice(index, 1);
      console.log(this.danhSachGheDangChon);
      this.soLanChon = this.soLanChon + 1;
      if (this.soLanChon === 1) {
        this.ListComponentItemGhe.map(item => {
          if (item.statusGhe === false) {
            item.ActiveDisableChair(false);
          }
        });
      }
    }
  };

  // Function Dat Ghe
  DatGhe = () => {
    if (localStorage.getItem("userDangNhap")) {
      const dataLocal = JSON.parse(localStorage.getItem("userDangNhap"));
      this.danhSachGheDangChon.map(item => {
        const uri = "QuanLyDatVe/DatVe";
        const dataPosting = {
          maLichChieu: this.maLichChieu,
          danhSachVe: [
            {
              maGhe: item.maGhe,
              giaVe: this.giaVe
            }
          ],
          taiKhoanNguoiDung: dataLocal.taiKhoan
        };
        this.dataService.Post(uri, dataPosting).subscribe(data => {});
      });
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      this._snackBar.open("Đặt Ghế Thành Công", "", config);
      console.log(this.danhSachGheDangChon);
      this.dataAPI.danhSachGhe.forEach(chair => {
        this.danhSachGheDangChon.forEach(item => {
          if(item.maGhe === chair.maGhe){
            chair.daDat = true;
          }
        })
      });
    } else {
      // SnackBar Optional
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      // config.panelClass = ['css-snackbar']
      this._snackBar.open(
        "Vui Lòng Đăng Nhập Để Thực Hiện Giao Dịch",
        "",
        config
      );
    }
  };
}
