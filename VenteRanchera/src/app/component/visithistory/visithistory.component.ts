import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfotrasportService } from 'src/app/Services/infotrasport.service';

@Component({
  selector: 'app-visithistory',
  templateUrl: './visithistory.component.html',
  styleUrls: ['./visithistory.component.css']
})
export class VisithistoryComponent implements OnInit {

  isActive = false
  VendorVisits: any;
  allInfoOfVendor: any;



  constructor(private routes: Router, private infotrasport: InfotrasportService) { }

  ngOnInit(): void {

    this.setVisitData();
    console.log(this.VendorVisits)


  }

  setVisitData() {

    this.VendorVisits = this.infotrasport.recivedVendorInfo;
    this.allInfoOfVendor = this.infotrasport.recivedAllVendorInfo;

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
