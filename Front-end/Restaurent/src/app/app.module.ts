import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { KitchenMasterDashboardComponent } from './components/kitchen-master-dashboard/kitchen-master-dashboard.component';
import { SupervisorDashboardComponent } from './components/supervisor-dashboard/supervisor-dashboard.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { AddSupervisorComponent } from './components/add-supervisor/add-supervisor.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { AllItemsComponent } from './components/all-items/all-items.component';
import { AllChefsComponent } from './components/all-chefs/all-chefs.component';
import { AllSupervisorsComponent } from './components/all-supervisors/all-supervisors.component';
import {MatTableModule} from '@angular/material/table';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CustomerDashboardComponent,
    AdminDashboardComponent,
    KitchenMasterDashboardComponent,
    SupervisorDashboardComponent,
    AddChefComponent,
    AddItemComponent,
    AddSupervisorComponent,
    EditItemComponent,
    AllItemsComponent,
    AllChefsComponent,
    AllSupervisorsComponent,

  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
