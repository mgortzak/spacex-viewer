import {Rocket} from "./rocket.model";
import {Telemetry} from "./telemetry.model";
import {Site} from "./site.model";
import {Links} from "./links.model";

export class Launch {

  constructor(public flight_number: number,
              public launch_date_utc: string,
              public launch_date_local: string,
              public launch_success: boolean,
              public details: string,
              public rocket: Rocket,
              public telemetry: Telemetry,
              public launch_site: Site,
              public links: Links) {
  }
}
