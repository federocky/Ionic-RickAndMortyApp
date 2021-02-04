import { LocationResults } from './../../models/location-resulsts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url: string = 'https://rickandmortyapi.com/api/location';

  constructor( private http: HttpClient ) { }

   //get all locations
   getLocations(): Observable<LocationResults> {
    return this.http.get<LocationResults>( this.url );
  }

  //get location
  getLocation( id: number ): Observable<Location>{
  
    if(id){
      return this.http.get<Location>(`${this.url}/${id}`);
    }
    
  }

  //search a certain location
  searchLocation( text: string ): Observable<LocationResults>{
    return this.http.get<LocationResults>(`${this.url}?name=${text}`);
  }


}
