import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {
  statusPhimDangChieu: boolean = true;
  statusPhimSapChieu: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  DoiSangPhimSapChieu() {
    this.statusPhimDangChieu = !this.statusPhimDangChieu;
    this.statusPhimSapChieu = !this.statusPhimSapChieu;
  }
  DoiLoaiPhimDangChieu() {
    this.statusPhimDangChieu = !this.statusPhimDangChieu;
    this.statusPhimSapChieu = !this.statusPhimSapChieu;
  }
}
