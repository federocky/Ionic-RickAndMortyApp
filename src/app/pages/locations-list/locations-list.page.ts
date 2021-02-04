import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location/location.service';


@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.page.html',
  styleUrls: ['./locations-list.page.scss'],
})
export class LocationsListPage implements OnInit {


  //guardaremos el id recibido por url
  profileId: number;

  //location para mostrar
  location: Location;

  //variable observable
  location$: Observable<Location>;

  constructor( private activatedRoute: ActivatedRoute,
              private locationService: LocationService
    ) { }


    ngOnInit() {

      //pilla dos parametros
      this.profileId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'), 10 );
        
      this.location$ = this.locationService.getLocation( this.profileId );

    
    }

}
