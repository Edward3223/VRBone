import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfotrasportService } from 'src/app/Services/infotrasport.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  isActive = false
  allInfoOfDelivery: any;
  deliveryOrder: any;

  constructor(private routes: Router, private infotrasport: InfotrasportService) { }


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
