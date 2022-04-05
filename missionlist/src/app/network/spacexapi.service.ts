import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(
    private http: HttpClient
  ) { }

  getMissionList() {
    return this.http.get('https://api.spacexdata.com/v3/launches')
  }

  getMissionDetails(flight_number) {
    return this.http.get(`https://api.spacexdata.com/v3/launches?flight_number=${flight_number}`)
  }
}
