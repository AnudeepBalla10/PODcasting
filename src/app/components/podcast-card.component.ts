import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.css']
})
export class PodcastCardComponent {
  @Input() podcast: any;
}
