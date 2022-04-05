import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missionlists;

  constructor(
    private spacexapiService: SpacexapiService
  ) { }

  ngOnInit() {
    this.missionlists = this.spacexapiService.getMissionList();
  }

}
