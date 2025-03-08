import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private episodes = [
    {
      id: '1',
      title: 'Tech Trends',
      coverImage: 'assets/images/episode1-cover.jpg',
      audioSrc: 'assets/audio/episode1.mp3',
      description: 'An overview of the latest trends in technology.',
    },
    {
      id: '2',
      title: 'Artificial Intelligence',
      coverImage: 'assets/images/episode2-cover.jpg',
      audioSrc: 'assets/audio/episode2.mp3',
      description: 'A deep dive into AI technologies and their impact.',
    }
  ];

  getAllEpisodes() {
    return this.episodes;
  }

  getEpisodeById(id: string) {
    return this.episodes.find(episode => episode.id === id);
  }

  getLatestEpisode() {
    return this.episodes[0];
  }
}
