import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {
  constructor() { }
  // 1. BEHAVIOR CHO TEMPLATE ĐĂNG NHẬP - ĐĂNG KÝ
  // Tạo store Behavior
  private dataBehaviorModal = new BehaviorSubject({} as any)
  public dataModal = this.dataBehaviorModal.asObservable();
  // Hàm đẩy dữ liệu lên store
  PushDataOnStoreForModal(value:any) {
    this.dataBehaviorModal.next(value);
  }

  // 2.BEHAVIOR CHO LOGIN - SIGNUP SUCCESS
  // Tạo store Behavior 
  private dataSuccessBehavior = new BehaviorSubject({} as any)
  public  dataSuccess = this.dataSuccessBehavior.asObservable();
  // Hàm đẩy dữ liệu lên store
  PushDataSuccessOnStore(value:any){
    this.dataSuccessBehavior.next(value)
  }

}
     