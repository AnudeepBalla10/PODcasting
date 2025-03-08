import { Component } from '@angular/core';
import { PodcastService } from '../services/podcast.service';

@Component({
  selector: 'app-podcast-library',
  templateUrl: './podcast-library.component.html',
  styleUrls: ['./podcast-library.component.css']
})
export class PodcastLibraryComponent {
  episodes = [];
  searchQuery: string;

  constructor(private podcastService: PodcastService) {
    this.episodes = this.podcastService.getAllEpisodes();
  }

  filterEpisodes() {
    return this.episodes.filter(episode => episode.title.includes(this.searchQuery));
  }
}
