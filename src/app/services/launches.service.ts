import {Injectable} from '@angular/core';
import {Launch} from "../models/launch.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'

@Injectable()
export class LaunchesService {

  constructor(private http: HttpClient) {
  }


  pastLaunches(): Observable<Launch[]> {
    console.log('pastLaunches')
    return this.http.get<Launch[]>('https://api.spacexdata.com/v2/launches?order=desc');
  }

}
