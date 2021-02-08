import { CharacterResults } from './../../models/character-results';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  //guardamos la url
  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  
  //get all characters
  getCharacters(): Observable<CharacterResults> {
    return this.http.get<CharacterResults>( this.url );
  }


  ///get character
  getCharacter( id:number ): Observable<Character>{

    if(id){
      return this.http.get<Character>(`${this.url}/${id}`);
    }
    
  }

  //search a certain character
  searchCharacter( text: string ): Observable<CharacterResults>{
    return this.http.get<CharacterResults>(`${this.url}?name=${text}`);
  }



}
