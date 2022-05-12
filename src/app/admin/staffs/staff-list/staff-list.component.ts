import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Staff} from 'src/app/shared/staff';
import{StaffService} from 'src/app/shared/staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  //declare
  filter:string;
  page:number=1;

  constructor(public staffService: StaffService,
    private route:Router) { }

  ngOnInit(): void {

    this.staffService.getAllStaffs();
  }

  //populate Employee Record
  populateEmployeeForm(staff: Staff){

    //changing date format
    var datePipe = new DatePipe("en-Uk");
    let formateddoj: any=datePipe.transform(staff.doj,'yyyy-MM-dd')
    let formateddob:any=datePipe.transform(staff.dob,'yyyy-MM-dd')
    staff.doj=formateddoj;
    staff.dob=formateddob;
    console.log(staff.doj);
    console.log(staff.dob);
    this.staffService.formData=Object.assign({},staff);
  }

  deleteStaff(id:number){
  }

  updateStaff(id:number){
    console.log(id);
    this.route.navigate(['staffupdate',id]);
  }
  

}
