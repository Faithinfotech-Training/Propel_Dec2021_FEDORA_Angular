import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { StaffService } from 'src/app/shared/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  myForm: FormGroup;
  constructor(public staffService: StaffService,private formBuilder: FormBuilder
    ) { 
      this.myForm = formBuilder.group({
        mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      })
    }

  ngOnInit(): void {
  }

  //Submit form
  onSubmit(form:NgForm){
    console.log(form.value);
    let addId=this.staffService.formData.staffId;
    //insert or update check condition
    if(addId == 0 || addId==null){
      this.insertRecord(form);
    }else{
      //Update
    this.updateRecord(form);
    }
  }

  //reset form
  resetForm(form:NgForm){
    if(form !=null){
    form.resetForm();
    }
  }
  //Insert method
  insertRecord(form:NgForm){
    console.log("Inserting");
    this.staffService.insertStaff(form.value).subscribe(
      result =>{
        console.log(result);
        this.resetForm(form);
      }
    );
    window.location.reload();
  }

  //update methd
  updateRecord(form:NgForm){
    console.log("updating");
      this.staffService.updateStaff(form.value).subscribe(
        result =>{
          console.log(result);
        }
      );
      window.location.reload();
  }
}
