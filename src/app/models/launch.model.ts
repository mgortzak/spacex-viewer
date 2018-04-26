import {Rocket} from "./rocket.model";

export class Launch {

  constructor(public flight_number: number,
              public launch_date_utc: string,
              public launch_date_local: string,
              public details: string,
              public rocket: Rocket) {
  }
}
