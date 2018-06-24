import { Injectable } from '@angular/core';
import {FlashCard} from './flash-card';
import {Language} from './language';
import {Settings} from './settings';
import {LanguageDataService} from './language-data.service';

@Injectable()
export class FlashCardDataService {
  lastId: number = 0;
  cards: FlashCard[] = [];
  settings: Settings;

  constructor(private languageService: LanguageDataService) {
    this.setDefaults();
  }

  setDefaults() {
    console.log('defaults....');
    const settings = new Settings();
    settings.numberOfWords = 20;
    settings.currentLanguage = this.languageService.getById(1);
    this.setSettings(settings);

    this.add(new FlashCard({id: 1, value: 'to be', valueTranslation: 'быть'}));
    this.add(new FlashCard({id: 1, value: 'to jump', valueTranslation: 'прыгать'}));
    this.add(new FlashCard({id: 1, value: 'to build', valueTranslation: 'строить'}));
    this.add(new FlashCard({id: 1, value: 'to find', valueTranslation: 'искать'}));
    this.add(new FlashCard({id: 1, value: 'to create', valueTranslation: 'создать'}));
  }

  add(card: FlashCard): FlashCardDataService {
    if (!card.id) {
      card.id = ++this.lastId;
    }
    if (!card.language) {
      card.language = this.settings.currentLanguage;
    }
    // Add card to the list
    this.cards.push(card);
    return this;
  }

  removeById(id: number): FlashCardDataService {
    this.cards = this.cards.filter(card => card.id !== id);
    return this;
  }

  getById(id: number): FlashCard | undefined {
    return this.cards.filter(card => card.id === id).pop();
  }

  updateById(id: number, values: Object = {}): FlashCard {
    const card = this.getById(id);
    if (!card) {
      return null;
    }

    Object.assign(card, values);
    return card;
  }

  getAll(): FlashCard[] {
    return this.cards;
  }

  getByLanguage(lang: Language): FlashCard[] {
    return this.cards.filter(card => card.language === lang);
  }

  setCurrentLanguageById(id: number): FlashCardDataService {
    const lang = this.languageService.getById(id);
    if (lang instanceof Language) {
      this.settings.currentLanguage = lang;
    }

    return this;
  }

  getSettings(): Settings {
    return this.settings;
  }

  setSettings(settings: Settings): FlashCardDataService {
    this.settings = settings;
    return this;
  }
}

