import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let ShortcutPipe = class ShortcutPipe {
    // value -- Gia tri ben trai
    // args -- gia tri ben phai dau ngoac
    // ex: {{title | shortcut: 50}}
    transform(value, limit) {
        if (value.length > limit) {
            return value.substr(0, limit) + '.....';
        }
        else
            return value;
    }
};
ShortcutPipe = tslib_1.__decorate([
    Pipe({
        name: 'shortcut' //Ten Pipe
    })
], ShortcutPipe);
export { ShortcutPipe };
//# sourceMappingURL=shortcut.pipe.js.map