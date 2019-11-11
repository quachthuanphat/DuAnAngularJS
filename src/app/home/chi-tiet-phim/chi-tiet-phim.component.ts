import { Component, OnInit } from "@angular/core";
import { ActivatedRoute,Router } from "@angular/router";
import { DataService } from "../../_core/service/data.service";
import * as _ from 'lodash'
@Component({
  selector: "app-chi-tiet-phim",
  templateUrl: "./chi-tiet-phim.component.html",
  styleUrls: ["./chi-tiet-phim.component.scss"]
})
export class ChiTietPhimComponent implements OnInit {
  // Variable
  maPhim: any;
  objectPhim: any;
  idActiveListDay: any;
  idActiveListMovie:number;
  lichChieuPhimTheoRap: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this._GetAPIAfterGetParamFormURL();
  }

  // Get API From URL
  _GetAPIAfterGetParamFormURL = () => {
    this.activatedRoute.queryParams.subscribe((param: any) => {
      this.maPhim = param.maPhim;
      const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.maPhim}`;
      this.dataService.Get(uri).subscribe(data => {
        // console.log(data);
        this.objectPhim = data;
      });
    });
  };

  // Function ActiveDivListMovie
  ActiveDivListDate = stt => {
    this.idActiveListDay = stt;
    console.log(this.idActiveListDay);
    console.log(this.objectPhim.heThongRapChieu[this.idActiveListDay].cumRapChieu[0].lichChieuPhim);
    
    this.lichChieuPhimTheoRap = _.chain(this.objectPhim.heThongRapChieu[this.idActiveListDay].cumRapChieu[0].lichChieuPhim)
                                  .groupBy(item => item.ngayChieuGioChieu.substring(0,10))
                                  .map((lst,ngay)=>({lst,ngay}))
                                  .value();
    console.log(this.lichChieuPhimTheoRap);
  }

  // Function ActiveDivListMovie
  ActiveDivListMovie = (stt) => {
    this.idActiveListMovie = stt;
  }

  // Function DatVe 
  DatVe = (_maLichChieu,_giaVe) => {
    // console.log(_maLichChieu);
    this.router.navigate(['phong-ve'],{queryParams:{maLichChieu:_maLichChieu,giaVe:_giaVe}});
  }
}
