import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfotrasportService {

  constructor() { }


  recivedVendorInfo: any
  recivedAllVendorInfo: any

  setIdOfVendor(info: any) {

    this.recivedVendorInfo = info
    // console.log('Informacion de las visitas', this.recivedVendorInfo)


  }

  setAllVendorInfo(info: any) {

    this.recivedAllVendorInfo = info
    // console.log('Toda la informacion del vendedor', this.recivedAllVendorInfo)

  }




}
