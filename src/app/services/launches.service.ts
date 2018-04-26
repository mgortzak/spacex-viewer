import {Injectable} from '@angular/core';
import {Launch} from "../models/launch.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LaunchesService {

  constructor(private http: HttpClient) {
  }


  pastLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>('https://api.spacexdata.com/v2/launches?order=desc')
  }

}
