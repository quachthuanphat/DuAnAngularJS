import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../_core/material/material.module';
let HomeModule = class HomeModule {
};
HomeModule = tslib_1.__decorate([
    NgModule({
        declarations: [HomeComponent, HeaderHomeComponent, FooterHomeComponent, ModalComponent],
        imports: [
            CommonModule,
            HomeRoutingModule,
            FormsModule,
            MaterialModule
        ]
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map