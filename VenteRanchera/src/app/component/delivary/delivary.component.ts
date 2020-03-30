import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivary',
  templateUrl: './delivary.component.html',
  styleUrls: ['./delivary.component.css']
})
export class DelivaryComponent implements OnInit {

  constructor(private routes: Router) { }

  isActive = false
  vendorList: any = [
    { nombre: 'Pepe', apellido: 'ramirez', empresa: 'Empresa X' },
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
}
