import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfotrasportService } from 'src/app/Services/infotrasport.service';

@Component({
  selector: 'app-delivary',
  templateUrl: './delivary.component.html',
  styleUrls: ['./delivary.component.css']
})
export class DelivaryComponent implements OnInit {

  constructor(private routes: Router, private infotrasport: InfotrasportService) { }

  isActive = false
  deliveryList: any = [
    {
      nombre: 'Pepe',
      apellido: 'ramirez',
      empresa: 'Empresa X',

      orden: [

        {
          oid: '1242d',
          cliente: 'Edward Cabrera',
          estado: 'Entregado'
        },
        {
          oid: '1242d',
          cliente: 'Pedro Ramirez',
          estado: 'Entregado'
        },

        {
          oid: '1242d',
          cliente: 'Juan Martines',
          estado: 'Entregado'
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



  ngOnInit() {
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

  goToOrderHistory(index: number) {

    this.routes.navigate(['/User/Delivery/Order', index]);
    this.infotrasport.setAllDeliveryInfo(this.deliveryList[index].orden)





  }

  sendAllDeliveryOrder(index: number) {
    this.infotrasport.setDeliveryOrder(this.deliveryList[index])



  }


}
