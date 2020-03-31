
import { Routes, RouterModule } from '@angular/router';
import { LateralNavBarComponent } from './component/lateral-nav-bar/lateral-nav-bar.component';
import { LoginComponent } from './component/login/login.component';
import { VendorListComponent } from './component/vendor-list/vendor-list.component';
import { DelivaryComponent } from './component/delivary/delivary.component';
import { VisithistoryComponent } from './component/visithistory/visithistory.component';
import { OrderhistoryComponent } from './component/orderhistory/orderhistory.component';


const routes: Routes = [

  { path: 'User/Vendor', component: LateralNavBarComponent },
  { path: 'User/Vendor/:id', component: VisithistoryComponent },
  { path: 'User/Delivery', component: DelivaryComponent },
  { path: 'User/Delivery/:id', component: OrderhistoryComponent },

  { path: 'User', component: LoginComponent },

  { path: '**', component: LoginComponent }


];


export const ROUTES = RouterModule.forRoot(routes)

