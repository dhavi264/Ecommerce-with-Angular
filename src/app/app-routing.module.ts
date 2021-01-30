import { SuccessComponent } from './success/success.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { WatchesComponent } from './watches/watches.component';
import { CustomerComponent } from './customer/customer.component';
import { TodaysComponent } from './todays/todays.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'electronics', component:ElectronicsComponent},
  {path:'bestsellers', component:BestsellersComponent},
  {path:'todays', component:TodaysComponent},
  {path:'customer', component:CustomerComponent},
  {path:'watches', component:WatchesComponent},
  {path:'payment', component:PaymentComponent},
  {path:'address', component:AddressComponent},
  {path:'success', component:SuccessComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
