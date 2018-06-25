import { Injectable } from '@angular/core';
import {FlashCard} from './flash-card';
import {Language} from './language';
import {Settings} from './settings';
import {LanguageDataService} from './language-data.service';

@Injectable({
  providedIn: 'root',
})
export class FlashCardDataService {
  lastId: number = 0;
  cards: FlashCard[] = [];
  settings: Settings;

  constructor(private languageService: LanguageDataService) {
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

