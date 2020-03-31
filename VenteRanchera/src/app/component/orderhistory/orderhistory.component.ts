import { Component, OnInit } from '@angular/core';
import { InfotrasportService } from 'src/app/Services/infotrasport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  isActive = false
  allInfoOfDelivery: any;
  deliveryOrder: any;

  constructor(private routes: Router, private infotrasport: InfotrasportService) { }

  ngOnInit(): void {

    this.setDeliveryOrder()
    this.setAllDeliveryInfo()


  }

  setDeliveryOrder() {
    this.deliveryOrder = this.infotrasport.recivedDeliveryOder

  }

  setAllDeliveryInfo() {
    this.allInfoOfDelivery = this.infotrasport.recivedAllDeliveryInfo
  }





  logOut() {

    this.routes.navigate(['/User']);

  }

  goToVendors() {


    this.routes.navigate(['/User/Vendor']);


  }

  goToDelivery() {

    this.routes.navigate(['User/Delivery']);


  }

}
