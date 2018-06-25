import { Component, OnInit } from '@angular/core';
import {FlashCardDataService} from '../flash-card-data.service';
import {LanguageDataService} from '../language-data.service';
import {Language} from '../language';
import {Settings} from '../settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {

  languages: Language[];
  newSettings: Settings;

  constructor(private flashCardService: FlashCardDataService, private languageService: LanguageDataService) {
    this.newSettings = flashCardService.getSettings();
    this.languages = languageService.getAll();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.flashCardService.setSettings(this.newSettings);
  }
}
