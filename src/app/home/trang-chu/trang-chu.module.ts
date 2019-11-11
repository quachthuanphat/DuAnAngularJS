import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrangChuRoutingModule } from './trang-chu-routing.module';
import { TrangChuComponent } from './trang-chu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { ItemPhimComponent } from './loai-phim/item-phim/item-phim.component';
import { PhimSapChieuComponent } from './loai-phim/phim-sap-chieu/phim-sap-chieu.component';
import { PhimDangChieuComponent } from './loai-phim/phim-dang-chieu/phim-dang-chieu.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PipeModule } from 'src/app/_core/pipe/pipe.module';
import { MaterialModule } from 'src/app/_core/material/material.module';
import { CumRapComponent } from './cum-rap/cum-rap.component';
import { HourButtonComponent } from './cum-rap/hour-button/hour-button.component';



@NgModule({
  declarations: [TrangChuComponent, CarouselComponent, LoaiPhimComponent, ItemPhimComponent, PhimSapChieuComponent, PhimDangChieuComponent, CumRapComponent, HourButtonComponent],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    AngularFontAwesomeModule,
    OwlModule,
    PipeModule,
    MaterialModule,
  ],
  exports: [
    CarouselComponent,
  ]
})
export class TrangChuModule { }
