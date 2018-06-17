import { Injectable } from '@angular/core';
import {FlashCard} from './flash-card';

@Injectable()
export class FlashCardDataService {
  lastId: number;
  cards: FlashCard[] = [];

  constructor() {
    this.lastId = 0;
  }

  add(card: FlashCard): FlashCardDataService {
    if (!card.id) {
      card.id = ++this.lastId;
    }
    this.cards.push(card);
    return this;
  }

  removeById(id: number): FlashCardDataService {
    this.cards = this.cards.filter(card => card.id !== id);
    return this;
  }

  getById(id: number): FlashCard {
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

  getByLanguageId(id: number): FlashCard[] {
    return this.cards.filter(card => card.languageId === id);
  }
}
