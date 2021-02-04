import { LocationResults } from './../models/location-resulsts';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  //episodes array
  locations: Location[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit() {

    //pedimos los episodios al servicio
    this.locationService.getLocations()
    .subscribe( (res: LocationResults) => {

      //cargamos los episodios
      const temp: LocationResults = res;
      this.locations = temp.results;
    },
    
    err => {
      console.log(err);
    });

  }

  ///Search an episode
  searchEpisode( text: string ): void {
    
    this.locationService.searchLocation( text )
      .subscribe( (res: LocationResults) => {
        this.locations = res.results;
      });
  }

}
