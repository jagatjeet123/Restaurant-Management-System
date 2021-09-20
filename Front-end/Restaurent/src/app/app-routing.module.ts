import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AllChefsComponent } from './components/all-chefs/all-chefs.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { AllSupervisorsComponent } from './components/all-supervisors/all-supervisors.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { KitchenMasterDashboardComponent } from './components/kitchen-master-dashboard/kitchen-master-dashboard.component';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"CustomerDashboard",component:CustomerDashboardComponent},
  {path:"AdminDashboard",component:AdminDashboardComponent,children:[
    {path:'',redirectTo:'dishes',pathMatch:'full'},
    {path:"dishes",component:AllItemsComponent},
    {path:"chefs",component:AllChefsComponent},
    {path:"supervisors",component:AllSupervisorsComponent}
  ]},
  {path:"KitchenMasterDashboard",component:KitchenMasterDashboardComponent},
  {path:"SupervisorDashboard",component:SupervisorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
