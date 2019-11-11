import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../_core/service/data.service'
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {
  // Mảng danh sách phim đang chiếu 
  danhSachPhimDangChieu = []
  // Link trailer
  linkTrailer: any = ""
  // Optional of Owl Carorusel
  carouselOptions = {
    margin: 15,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    multipleRow:true,
    row:2,
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
  }
  // End Optional
  constructor(private dataPhimService: DataService ) { }

  ngOnInit() {
    this.LayDanhSachPhim();
  }
  // Get API lấy danh sách phim
  LayDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP04";
    this.dataPhimService.Get(uri).subscribe((data) => {
      this.danhSachPhimDangChieu = data;
    })  
  }
  ShareLink(value) {
    this.linkTrailer = value;
  }
}
