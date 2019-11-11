import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as _ from 'lodash';
let CumRapComponent = class CumRapComponent {
    constructor(dataService, datePipe) {
        this.dataService = dataService;
        this.datePipe = datePipe;
        this.idActiveCenter = 0;
        this.idActiveRight = 0;
        this.danhSachRapPhim = [];
        this.heThongChiNhanhRap = [];
        this.maHeThongRap = "BHDStar";
        this.statusActive = 0;
        this.listPhim = [];
        this.phimTheoNgay = [];
    }
    ngOnInit() {
        this.GetLogoPhim();
        this.Active(0, this.maHeThongRap);
    }
    // Goi API logo phim
    GetLogoPhim() {
        this.dataService.Get("QuanLyRap/LayThongTinHeThongRap").subscribe(data => {
            this.danhSachRapPhim = data;
        });
    }
    // Function left content call center content
    Active(stt, maHeThongRap_) {
        this.idActiveCenter = stt;
        this.maHeThongRap = maHeThongRap_;
        const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.maHeThongRap}`;
        this.dataService.Get(uri).subscribe(data => {
            this.heThongChiNhanhRap = data;
        });
    }
    // Function center content call right content
    ActiveDiv(valueActive, _maHeThongRap, i, _maCumRap) {
        this.statusActive = valueActive;
        this.idActiveRight = i;
        const uri = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${_maHeThongRap}&maNhom=GP04`;
        // Call API
        this.dataService.Get(uri).subscribe(data => {
            data[0].lstCumRap.find(item => {
                if (item.maCumRap === _maCumRap) {
                    return this.listPhim = item.danhSachPhim;
                }
                else
                    this.listPhim = [];
            });
            console.log(this.listPhim);
            // Group By Phim Theo Ngay Su Dung Lodash
            this.phimTheoNgay = _.chain(this.listPhim)
                .groupBy(function (item) { return item.ngayChieuGioChieu.substring(0, 10); })
                .map((lst, ngay) => ({ ngay, lst }))
                .value();
            console.log(this.phimTheoNgay);
        });
    }
};
CumRapComponent = tslib_1.__decorate([
    Component({
        selector: 'app-cum-rap',
        templateUrl: './cum-rap.component.html',
        styleUrls: ['./cum-rap.component.scss']
    })
], CumRapComponent);
export { CumRapComponent };
//# sourceMappingURL=cum-rap.component.js.map