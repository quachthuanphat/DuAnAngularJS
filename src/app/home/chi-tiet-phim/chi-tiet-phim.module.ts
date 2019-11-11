import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietPhimRoutingModule } from './chi-tiet-phim-routing.module';
import { ChiTietPhimComponent } from './chi-tiet-phim.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ChiTietPhimComponent],
  imports: [
    CommonModule,
    ChiTietPhimRoutingModule,
    NgbModule
  ],
  exports:[ChiTietPhimComponent]
})
export class ChiTietPhimModule { }
