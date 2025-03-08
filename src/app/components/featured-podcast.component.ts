import { Component } from '@angular/core';
import { PodcastService } from '../services/podcast.service';

@Component({
  selector: 'app-featured-podcast',
  templateUrl: './featured-podcast.component.html',
  styleUrls: ['./featured-podcast.component.css']
})
export class FeaturedPodcastComponent {
  latestEpisode: any;

  constructor(private podcastService: PodcastService) {
    this.latestEpisode = this.podcastService.getLatestEpisode();
  }
}
