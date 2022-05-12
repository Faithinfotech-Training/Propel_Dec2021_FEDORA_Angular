import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

 //declare variables--global
 staff: Staff[]; //list of all staffs
 formData: Staff=new Staff();

 constructor(private httpClient:HttpClient) {  }

 
 //get All the Staff or Method for Binding all Staff
 getAllStaffs()
 {
   this.httpClient.get(environment.apiUrl+'/api/staffs')
     .toPromise().then(response =>
         this.staff=response as Staff[]);
 }
 //get a particular Staff by id
 getStaff(staffId: number) :Observable<any>
 {
   return this.httpClient.get(environment.apiUrl+'/api/staffs/'+staffId);
 }
 //insert Staff
 insertStaff(staf: Staff) :Observable<any>
 {
   return this.httpClient.post(environment.apiUrl+'/api/staffs/',staf);
 }
 //update Staff
 updateStaff(staf: Staff) :Observable<any>
 {
   return this.httpClient.put(environment.apiUrl+'/api/staffs/',staf);
 }
 //delete Employee
 //deleteStaff(staff_id: number) :Observable<any>
 //{
  // return this.httpClient.put(environment.apiUrl+'/api/staffs/'+staff_id);
 //}

}
