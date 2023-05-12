import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeatailService } from '../services/deatail.service';
import { EmployeeModel } from './employee.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  EmployeeData: any;


  constructor(private api:DeatailService, ){ }

  ngOnInit(): void {

    this.getAllEmployee();
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.EmployeeData=res;
    })
  }

  deleteDetails(data:any){
    this.api.deletDetails(data.id)
    .subscribe((resp)=>{
      console.log(resp);
    });
    window.location.reload();
    alert("deleted details")
  }



}
