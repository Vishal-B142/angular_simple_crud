import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeatailService } from '../services/deatail.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {
  submitted:boolean = false;
  addedData:any;

  userForm =new FormGroup({

    firstName: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z\\s]+$/),Validators.minLength(3),Validators.maxLength(10)]),
    lastName : new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('',[Validators.required]),
    salary :new FormControl('',[Validators.required]),

    });
  constructor(private api:DeatailService) {

  }

  ngOnInit(): void {
  }

  get f(){
    return this.userForm.controls
   }

  saveData(){
    this.submitted = true;
    this.api.postEmployee(this.userForm.value)
   .subscribe((data)=>{
    this.addedData = data;
    console.log("adeddddd",this.addedData);

   })
  }

}
