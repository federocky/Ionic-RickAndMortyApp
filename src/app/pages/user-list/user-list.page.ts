import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterResults } from 'src/app/models/character-results';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  //guardaremos el id recibido por url
  profileId: number;

  //el personaje a mostrar
  character: Character;

  //probando lo de async
  character$: Observable<Character>;

  constructor(private characterService: CharacterService,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {

   //pilla dos parametros, el parametro y el radix? TODO: mirar esto
   this.profileId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'), 10 );
    
   this.character$ = this.characterService.getCharacter( this.profileId );

  }

}
