import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/_core/material/material.module';
import { PhongVeRoutingModule } from './phong-ve-routing.module';
import { PhongVeComponent } from './phong-ve.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';


@NgModule({
  declarations: [PhongVeComponent, ItemGheComponent],
  imports: [
    CommonModule,
    PhongVeRoutingModule,
    MaterialModule
  ]
})
export class PhongVeModule { }
