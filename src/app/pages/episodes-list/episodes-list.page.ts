import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/models/episode';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.page.html',
  styleUrls: ['./episodes-list.page.scss'],
})
export class EpisodesListPage implements OnInit {

    //guardaremos el id recibido por url
    profileId: number;

    //el episodio a mostrar
    episode: Episode;
  
    //cargando el async
    episode$: Observable<Episode>;

  constructor( private episodeService: EpisodesService,
              private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

  //pilla dos parametros
  this.profileId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'), 10 );
    
  this.episode$ = this.episodeService.getEpisode( this.profileId );

  }

}
