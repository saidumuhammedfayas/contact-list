import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';


const routes: Routes = [
  {
    path:'',component:AllcontactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
