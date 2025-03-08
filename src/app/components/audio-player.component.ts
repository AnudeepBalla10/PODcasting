import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent {
  @Input() audioSrc: string;
  isPlaying = false;
  audio: HTMLAudioElement;

  ngOnInit() {
    this.audio = new Audio(this.audioSrc);
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  toggle() {
    this.isPlaying ? this.pause() : this.play();
  }
}
