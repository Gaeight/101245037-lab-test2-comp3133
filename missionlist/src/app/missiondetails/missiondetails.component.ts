import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  flight_details;
  flightId;

  constructor(
    private spacexapiService: SpacexapiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.flightId = this.route.snapshot.params['flight_number'];
    this.flight_details = this.spacexapiService.getMissionDetails(this.flightId);
  }

}
