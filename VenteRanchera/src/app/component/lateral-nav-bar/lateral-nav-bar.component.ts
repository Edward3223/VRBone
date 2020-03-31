import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle';
import { InfotrasportService } from 'src/app/Services/infotrasport.service';

@Component({
  selector: 'app-lateral-nav-bar',
  templateUrl: './lateral-nav-bar.component.html',
  styleUrls: ['./lateral-nav-bar.component.css']
})
export class LateralNavBarComponent implements OnInit {

  isActive = false
  vendorid: number
  vendorList: any = [
    {
      nombre: 'Pepe',
      apellido: 'ramirez',
      empresa: 'Empresa X',

      visitas: [

        {
          vid: '1242d',
          location: 'Calle 23B',
          estado: 'Visitada'
        },
        {
          vid: '1241',
          location: 'Calle perejil54 - sector los guandules',
          estado: 'Visitada'
        },

        {
          vid: '124213eeefx1234',
          location: 'Calle 23B - esquina a la via central',
          estado: 'Visitada'
        }

      ]


    },
    { nombre: 'Jose', apellido: 'ramirez', empresa: 'Empresa A' },
    { nombre: 'godofreda', apellido: 'ramirez', empresa: 'Empresa Z' },
    { nombre: 'Maria', apellido: 'ramirez', empresa: 'Empresa V' },
    { nombre: 'Juan', apellido: 'ramirez', empresa: 'Empresa B' },
    { nombre: 'Edward', apellido: 'ramirez', empresa: 'Empresa M' },
    { nombre: 'Pedro', apellido: 'ramirez', empresa: 'Empresa K' },
    { nombre: 'Alfonso', apellido: 'ramirez', empresa: 'Empresa O' }
  ]

  constructor(private routes: Router, private infotrasport: InfotrasportService) { }

  ngOnInit() {

    console.log(this.vendorList.vid)
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

  goToVisitHistory(index: number) {

    this.routes.navigate(['/User/Vendor/Visit/', index]);
    this.vendorid = index;
    this.infotrasport.setVisitOfVendor(this.vendorList[index].visitas)



  }

  gotToAssing(index: number) {
    this.routes.navigate(['User/Delivery/Assing/', index]);



  }

  sendAllInfo(index: number) {
    this.infotrasport.setAllVendorInfo(this.vendorList[index]);

  }



}
