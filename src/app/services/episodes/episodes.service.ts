import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode';
import { EpisodeResults } from 'src/app/models/episode-results';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  //guardamos la url en la variable
  private url: string = 'https://rickandmortyapi.com/api/episode';

  constructor( private http: HttpClient ) { }

  //get all episodes
  getEpisodes(): Observable<EpisodeResults> {
    return this.http.get<EpisodeResults>( this.url );
  }

   //get Episode
   getEpisode( id: number ): Observable<Episode>{
  
    if(id){
      return this.http.get<Episode>(`${this.url}/${id}`);
    }
    
  }

   //search a certain episode
   searchEpisode( text: string ): Observable<EpisodeResults>{
    return this.http.get<EpisodeResults>(`${this.url}?name=${text}`);
  }

}
