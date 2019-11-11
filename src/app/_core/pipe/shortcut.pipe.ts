import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut' //Ten Pipe
})
export class ShortcutPipe implements PipeTransform {
  // value -- Gia tri ben trai
  // args -- gia tri ben phai dau ngoac
  // ex: {{title | shortcut: 50}}
  transform(value: any, limit: number): any {
    if (value.length > limit) {
      return value.substr(0, limit) + '.....';
    } else return value;
  }

}
