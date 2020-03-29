import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-lateral-nav-bar',
  templateUrl: './lateral-nav-bar.component.html',
  styleUrls: ['./lateral-nav-bar.component.css']
})
export class LateralNavBarComponent implements OnInit {

  isActive = false
  vendorList: any = [
    { nombre: 'Pepe', apellido: 'ramirez' },
    { nombre: 'Jose', apellido: 'ramirez' },
    { nombre: 'godofreda', apellido: 'ramirez' },
    { nombre: 'Maria', apellido: 'ramirez' },
    { nombre: 'Juan', apellido: 'ramirez' },
    { nombre: 'Edward', apellido: 'ramirez' },
    { nombre: 'Pedro', apellido: 'ramirez' },
    { nombre: 'Alfonso', apellido: 'ramirez' }
  ]

  constructor(private routes: Router) { }

  ngOnInit() {

    console.log(this.vendorList)
  }

  logOut() {

    this.routes.navigate(['/User']);

  }

  goToVendors() {

    this.routes.navigate(['/User/Vendor']);

  }

}
