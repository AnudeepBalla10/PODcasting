import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section.component';
import { FeaturedPodcastComponent } from './components/featured-podcast.component';
import { PodcastCardComponent } from './components/podcast-card.component';
import { AudioPlayerComponent } from './components/audio-player.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { IndividualEpisodeComponent } from './components/individual-episode.component';
import { PodcastLibraryComponent } from './components/podcast-library.component';
import { PodcastService } from './services/podcast.service';

const appRoutes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'library', component: PodcastLibraryComponent },
  { path: 'episode/:id', component: IndividualEpisodeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    FeaturedPodcastComponent,
    PodcastCardComponent,
    AudioPlayerComponent,
    AboutComponent,
    ContactComponent,
    IndividualEpisodeComponent,
    PodcastLibraryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PodcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
