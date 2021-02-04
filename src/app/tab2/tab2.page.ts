import { EpisodeResults } from './../models/episode-results';
import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode';
import { EpisodesService } from '../services/episodes/episodes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  //episodes array
  episodes: Episode[] = [];

  constructor(private episodeService: EpisodesService) {}

  ngOnInit() {

    //pedimos los episodios al servicio
    this.episodeService.getEpisodes()
    .subscribe( (res: EpisodeResults) => {

      //cargamos los episodios
      const temp: EpisodeResults = res;
      this.episodes = temp.results;
    },
    
    err => {
      console.log(err);
    });

  }

  ///Search an episode
  searchEpisode( text: string ): void {
    
    this.episodeService.searchEpisode( text )
      .subscribe( (res: EpisodeResults) => {
        this.episodes = res.results;
      });
  }

}
