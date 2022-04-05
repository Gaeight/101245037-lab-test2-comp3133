import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { SpacexapiService } from './network/spacexapi.service';

const routes: Routes = [
  { path: '', component: MissionlistComponent},
  
  { path: 'spacexapi/:flight_number', component: MissiondetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
