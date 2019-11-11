import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() objectGhe;

  @Output() eventDatGhe = new EventEmitter ();
  statusGhe: boolean = false;
  disableChair: boolean = false;
  constructor() { }

  ngOnInit() {
    
    
  }

  // Function Select Chair
  SelectChair = () => {
    this.statusGhe = !this.statusGhe;
    this.eventDatGhe.emit({
      statusChair: this.statusGhe,
      objectChair: this.objectGhe
    })
  }
  ActiveDisableChair = (status) => {
    this.disableChair = status;
  }
}
