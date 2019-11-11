import { Component, OnInit } from "@angular/core";
import { BehaviorService } from "../../_core/service/behavior.service";
@Component({
  selector: "app-header-home",
  templateUrl: "./header-home.component.html",
  styleUrls: ["./header-home.component.scss"]
})
export class HeaderHomeComponent implements OnInit {
  statusTemplate: boolean;
  informationUser: any;
  constructor(private BehaviorStore: BehaviorService) {}

  ngOnInit() {
    // this.BehaviorStore.dataSuccess.subscribe(data => {
    //   if (data.dataUser !== null) {
    //     this.informationUser = data.dataUser;
    //     this.statusTemplate = data.status;
    //   } else {
    //     this.statusTemplate = data.status;
    //   }
    // });
    // if (localStorage.getItem("userDangNhap")) {
    //   this.statusTemplate = false;
    //   this.informationUser = JSON.parse(localStorage.getItem("userDangNhap"));
    //   return;
    // }else{
      
    // }
    if(localStorage.getItem("userDangNhap")){
      let userDangNhap = JSON.parse(localStorage.getItem("userDangNhap"));
      this.BehaviorStore.PushDataSuccessOnStore({dataUser:userDangNhap,status:false});
    }else{
      this.BehaviorStore.PushDataSuccessOnStore({dataUser:null,status:true});
    }
    this.BehaviorStore.dataSuccess.subscribe(data => {
      if(data.dataUser !== null){
        console.log(data.dataUser.hoTen);
        
        this.informationUser = data.dataUser.hoTen;
        this.statusTemplate = data.status;
      } else this.statusTemplate = data.status;
    })
  }
  DangNhap() {
    let objectDN = { status: true };
    this.BehaviorStore.PushDataOnStoreForModal(objectDN);
  }

  DangKy() {
    let objectDK = { status: false };
    this.BehaviorStore.PushDataOnStoreForModal(objectDK);
  }

  LogOut() {
    localStorage.removeItem("userDangNhap");
    localStorage.removeItem("tokenUser");
    this.BehaviorStore.PushDataSuccessOnStore({ dataUser: null,status:true});
  }
}
