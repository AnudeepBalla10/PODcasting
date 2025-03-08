import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastService } from '../services/podcast.service';

@Component({
  selector: 'app-individual-episode',
  templateUrl: './individual-episode.component.html',
  styleUrls: ['./individual-episode.component.css']
})
export class IndividualEpisodeComponent implements OnInit {
  episode: any;

  constructor(private route: ActivatedRoute, private podcastService: PodcastService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.episode = this.podcastService.getEpisodeById(id);
  }
}
