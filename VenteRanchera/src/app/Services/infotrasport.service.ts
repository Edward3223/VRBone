import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfotrasportService {

  constructor() { }


  recivedVendorInfo: any;
  recivedAllVendorInfo: any;

  recivedDeliveryOder: any;
  recivedAllDeliveryInfo: any;

  setVisitOfVendor(info: any) {

    this.recivedVendorInfo = info
    // console.log('Informacion de las visitas', this.recivedVendorInfo)


  }

  setAllVendorInfo(info: any) {

    this.recivedAllVendorInfo = info
    // console.log('Toda la informacion del vendedor', this.recivedAllVendorInfo)

  }


  setAllDeliveryInfo(info: any) {

    this.recivedDeliveryOder = info
    console.log('Desde el service', this.recivedDeliveryOder)
  }

  setDeliveryOrder(info: any) {

    this.recivedAllDeliveryInfo = info

  }


}
