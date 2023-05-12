import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeatailService {

  appUrl='http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get<any>(this.appUrl+"/employee")

  }
  postEmployee(data: any) {
    return this.http.post<any>(this.appUrl+"/employee", data)

  }
  getdetailsById(id:any){
    return this.http.get<any>(`${this.appUrl}/employee/${id}`)
  }
  updateTheDetails(id:any, data:any){
    return this.http.put<any>(`${this.appUrl}/employee/${id}`, data)
  }
  deletDetails(id: any) {
    return this.http.delete<any>(this.appUrl+"/employee/"+id)
  }
}

