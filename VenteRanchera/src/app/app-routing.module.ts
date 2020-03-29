
import { Routes, RouterModule } from '@angular/router';
import { LateralNavBarComponent } from './component/lateral-nav-bar/lateral-nav-bar.component';
import { LoginComponent } from './component/login/login.component';
import { VendorListComponent } from './component/vendor-list/vendor-list.component';


const routes: Routes = [

  { path: 'User', component: LateralNavBarComponent },

  { path: '**', component: LoginComponent }


];


export const ROUTES = RouterModule.forRoot(routes)

