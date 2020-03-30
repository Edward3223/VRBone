import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LateralNavBarComponent } from './component/lateral-nav-bar/lateral-nav-bar.component';
import { RouterModule } from '@angular/router';
import { VendorListComponent } from './component/vendor-list/vendor-list.component';
import { DelivaryComponent } from './component/delivary/delivary.component';
import { AssignComponent } from './component/assign/assign.component';
import { OrderhistoryComponent } from './component/orderhistory/orderhistory.component';
import { VisithistoryComponent } from './component/visithistory/visithistory.component';
import { OrdersComponent } from './component/orders/orders.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LateralNavBarComponent,
    VendorListComponent,
    DelivaryComponent,
    AssignComponent,
    OrderhistoryComponent,
    VisithistoryComponent,
    OrdersComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ROUTES,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
