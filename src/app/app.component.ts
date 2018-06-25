import {Component} from '@angular/core';
import {FlashCardDataService} from './flash-card-data.service';
import {LanguageDataService} from './language-data.service';
import {FlashCard} from './flash-card';
import {Settings} from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private flashCardService: FlashCardDataService, private languageService: LanguageDataService) {
    this.setDefaults();
  }

  setDefaults() {
    const settings = new Settings();
    settings.numberOfWords = 20;
    settings.currentLanguage = this.languageService.getById(1);
    this.flashCardService.setSettings(settings);

    this.flashCardService.add(new FlashCard({value: 'to be', valueTranslation: 'быть'}));
    this.flashCardService.add(new FlashCard({value: 'to jump', valueTranslation: 'прыгать'}));
    this.flashCardService.add(new FlashCard({value: 'to build', valueTranslation: 'строить'}));
    this.flashCardService.add(new FlashCard({value: 'to find', valueTranslation: 'искать'}));
    this.flashCardService.add(new FlashCard({value: 'to create', valueTranslation: 'создать'}));
  }
}
