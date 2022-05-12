import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StaffListComponent } from './admin/staffs/staff-list/staff-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { LoginComponent } from './login/login.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { AuthGuard } from './shared/auth.guard';
import { StaffComponent } from 'src/app/admin/staffs/staff/staff.component';

;

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  { path: 'receptionist', component: ReceptionistComponent,canActivate:[AuthGuard],data:{role:'2'}},
  { path: 'doctor', component: DoctorComponent,canActivate:[AuthGuard],data:{role:'3'}},
  { path: 'labtech', component: LabtechnicianComponent,canActivate:[AuthGuard],data:{role:'4'}},
  { path: 'pharmacist', component: PharmacistComponent,canActivate:[AuthGuard],data:{role:'5'}},
  { path: 'stafflist', component: StaffListComponent },
  { path: 'staff', component: StaffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
