import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './shortcut.pipe';
import { SafePipe } from './safe.pipe';
let PipeModule = class PipeModule {
};
PipeModule = tslib_1.__decorate([
    NgModule({
        declarations: [ShortcutPipe, SafePipe],
        imports: [
            CommonModule
        ],
        exports: [ShortcutPipe, SafePipe]
    })
], PipeModule);
export { PipeModule };
//# sourceMappingURL=pipe.module.js.map