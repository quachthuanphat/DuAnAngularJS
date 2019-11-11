import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../_core/service/data.service";
import * as _ from "lodash";
import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: "app-cum-rap",
  templateUrl: "./cum-rap.component.html",
  styleUrls: ["./cum-rap.component.scss"]
})
export class CumRapComponent implements OnInit {
  idActiveCenter: any = 0;
  idActiveRight: any = 0;
  danhSachRapPhim = [];

  heThongChiNhanhRap = [];
  maHeThongRap = "BHDStar";
  statusActive = 0;
  listPhim = [];
  phimTheoNgay = [];
  constructor(
    private dataService: DataService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit() {
    this.GetLogoPhim();
    this.Active(0, this.maHeThongRap);
    console.log(this.phimTheoNgay);
  }
  // Goi API logo phim
  GetLogoPhim() {
    this.dataService.Get("QuanLyRap/LayThongTinHeThongRap").subscribe(data => {
      this.danhSachRapPhim = data;
    });
  }

  // Function left content call center content
  Active = (stt, maHeThongRap_) => {
    this.idActiveCenter = stt;
    this.maHeThongRap = maHeThongRap_;

    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.maHeThongRap}`;
    this.dataService.Get(uri).subscribe(data => {
      this.heThongChiNhanhRap = data;
      this.statusActive = 0;
      this.idActiveRight = 0;
      this.ActiveDiv(0, this.maHeThongRap, this.heThongChiNhanhRap[0].maCumRap);
    });
  };

  // Function center content call right content
  ActiveDiv(valueActive, _maHeThongRap, _maCumRap) {
    this.statusActive = valueActive;
    this.idActiveRight = valueActive;

    const uri = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${_maHeThongRap}&maNhom=GP04`;

    // Call API
    this.dataService.Get(uri).subscribe(data => {
      data[0].lstCumRap.find(item => {
        if (item.maCumRap === _maCumRap) {
          return (this.listPhim = item.danhSachPhim);
        } else this.listPhim = [];
      });
      if (this.listPhim.length > 0) {
        this.phimTheoNgay = _.chain(this.listPhim[0].lstLichChieuTheoPhim)
          .groupBy(item => item.ngayChieuGioChieu.substring(0, 10))
          .map((lst, ngay) => ({ lst, ngay }))
          .value();
          console.log(this.phimTheoNgay)
      } else this.phimTheoNgay = [];
    });
  }

  // Function Phong Ve
  PhongVe(value) {
    console.log(value)
    const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value.maLichChieu}`;
    this.router.navigate(["phong-ve"], {
      queryParams: { maLichChieu: value.maLichChieu }
    });
  }
}
