import { AddDetailsComponent } from './add-details/add-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component'

const routes: Routes = [
  {path:'', redirectTo:'details',pathMatch:'full'},
  {path:'details', component:DetailsComponent},
  {path:'add', component:AddDetailsComponent},
  {path:'edit/:id', component:EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
