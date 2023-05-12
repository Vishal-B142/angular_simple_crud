import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeatailService } from '../services/deatail.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {


  userForm =new FormGroup({

    firstName: new FormControl('',[Validators.required,]),
    lastName : new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('',[Validators.required]),
    salary :new FormControl('',[Validators.required]),

    });
  particularDetails: any;
  updatedData: any;
  constructor(private route: ActivatedRoute,private api:DeatailService) { }

  uniquId:any =this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.saveEditedData();
  }

  saveEditedData(){
   this.getAllDetails(this.uniquId);
   console.log("idddddddddd",this.uniquId);

  }
  getAllDetails(id:any){
   this.api.getdetailsById(id)
   .subscribe((response)=>{
     this.particularDetails = response;
     console.log("details: ",this.particularDetails);

     this.userForm.controls['firstName'].setValue(response.firstName)
     this.userForm.controls['lastName'].setValue(response.lastName)
     this.userForm.controls['email'].setValue(response.email)
     this.userForm.controls['mobile'].setValue(response.mobile)
     this.userForm.controls['salary'].setValue(response.salary)
   }
  )}

  callUpdate(){
    this.updateDetails(this.uniquId);
  }

  updateDetails(id:any){
    this.api.updateTheDetails(id, this.userForm.value)
    .subscribe((resp: any) =>{
      this.updatedData=resp;
      console.log(resp);
    },
  )}
}
