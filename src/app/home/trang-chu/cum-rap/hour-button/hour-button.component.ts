import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { DataService } from '../../../../_core/service/data.service'

@Component({
  selector: 'app-hour-button',
  templateUrl: './hour-button.component.html',
  styleUrls: ['./hour-button.component.scss']
})
export class HourButtonComponent implements OnInit {
  @Input() inforHour;
  @Output() pushObjectHour = new EventEmitter();
  maPhim:number;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.maPhim = this.inforHour.maPhim
    
  }

  PhongVe(){
    this.pushObjectHour.emit(this.inforHour)
  }
}
