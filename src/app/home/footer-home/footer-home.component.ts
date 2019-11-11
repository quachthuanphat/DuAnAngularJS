import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.scss']
})
export class FooterHomeComponent implements OnInit {
  listImage = [
    {src:"../../../assets/images/img-for-home/bhd.png"},
    {src:"../../../assets/images/img-for-home/cinestar.png"},
    {src:"../../../assets/images/img-for-home/AGRIBANK.png"},
    {src:"../../../assets/images/img-for-home/cnx.jpg"},
    {src:"../../../assets/images/img-for-home/dongdacinema.png"},
    {src:"../../../assets/images/img-for-home/galaxycine.png"},
    {src:"../../../assets/images/img-for-home/laban.png"},
    {src:"../../../assets/images/img-for-home/megags.png"},
    {src:"../../../assets/images/img-for-home/momo.png"},
    {src:"../../../assets/images/img-for-home/payoo.jpg"},
    {src:"../../../assets/images/img-for-home/zalopay_icon.png"},
    {src:"../../../assets/images/img-for-home/123go.png"},
    {src:"../../../assets/images/img-for-home/STARLIGHT.png"},
    {src:"../../../assets/images/img-for-home/VIETTINBANK.png"},
    {src:"../../../assets/images/img-for-home/bt.jpg"},
    {src:"../../../assets/images/img-for-home/VCB.png"},
    {src:"../../../assets/images/img-for-home/TOUCH.png"},
    {src:"../../../assets/images/img-for-home/IVB.png"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
