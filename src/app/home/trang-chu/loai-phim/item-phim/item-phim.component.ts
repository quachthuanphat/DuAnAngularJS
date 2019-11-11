import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() object;
  @Output() shareLink = new EventEmitter();
  constructor(  
     private router:Router
  ) { 
 
  }

  ngOnInit() {

  }
  // Đẩy link trailer để mở Modal
  MoTrailer() { 
    this.shareLink.emit(this.object.trailer);
  }

  // Function For Button "Dat Ve"
  _DatVe(){
    this.router.navigate(['chi-tiet-phim'],{queryParams:{maPhim:this.object.maPhim,tenPhim:this.object.tenPhim}})
  }
}
