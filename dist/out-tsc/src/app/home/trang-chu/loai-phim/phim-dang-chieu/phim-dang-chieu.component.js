import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PhimDangChieuComponent = class PhimDangChieuComponent {
    // End Optional
    constructor(dataPhimService) {
        this.dataPhimService = dataPhimService;
        // Mảng danh sách phim đang chiếu 
        this.danhSachPhimDangChieu = [];
        // Link trailer
        this.linkTrailer = "";
        // Optional of Owl Carorusel
        this.carouselOptions = {
            margin: 15,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsiveClass: true,
            multipleRow: true,
            row: 2,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                },
                1500: {
                    items: 4,
                    nav: true,
                    loop: false,
                }
            }
        };
    }
    ngOnInit() {
        this.LayDanhSachPhim();
    }
    // Get API lấy danh sách phim
    LayDanhSachPhim() {
        const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP04";
        this.dataPhimService.Get(uri).subscribe((data) => {
            this.danhSachPhimDangChieu = data;
        });
    }
    ShareLink(value) {
        this.linkTrailer = value;
    }
};
PhimDangChieuComponent = tslib_1.__decorate([
    Component({
        selector: 'app-phim-dang-chieu',
        templateUrl: './phim-dang-chieu.component.html',
        styleUrls: ['./phim-dang-chieu.component.scss']
    })
], PhimDangChieuComponent);
export { PhimDangChieuComponent };
//# sourceMappingURL=phim-dang-chieu.component.js.map