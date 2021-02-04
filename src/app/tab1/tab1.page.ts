import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterResults } from '../models/character-results';
import { CharacterService } from '../services/character/character.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  //almacenare mis personajes
  characters: Character[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {

    //pedimos los personajes al servicio
    this.characterService.getCharacters()
    .subscribe( (res: CharacterResults) => {

      //cargamos los personajes
      const temp: CharacterResults = res;
      this.characters = temp.results;
    },
    
    err => {
      console.log(err);
    });

  }

  ///Search a character
  searchCharacter( text: string ): void {
    
    this.characterService.searchCharacter(text)
      .subscribe( (res: CharacterResults) => {
        this.characters = res.results;
      });
  }

}
