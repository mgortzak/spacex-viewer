import {Injectable} from '@angular/core';
import {Launch} from "../models/launch.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Http} from "@angular/http";

@Injectable()
export class LaunchesService {

  constructor(private http: Http) {
  }


  pastLaunches(): Observable<Launch[]> {
    console.log('pastLaunches')
    return this.http.get('https://api.spacexdata.com/v2/launches?order=desc')
      .map(launches => launches.json())
  }

}
