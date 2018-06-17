import { Injectable } from '@angular/core';
import {Language} from './language';

@Injectable({
  providedIn: 'root'
})

export class LanguageDataService {
  lastId: number = 0;
  languages: Language[] = [];

  constructor() {
    const langEn = new Language({id: 1, name: 'English'});
    this.add(langEn);
  }

  add(lang: Language): LanguageDataService{
    if (!lang.id) {
      lang.id = ++this.lastId;
    }
    this.languages.push(lang);
    return this;
  }

  getById(id: number): Language {
    return this.languages.filter(lang => lang.id === id).pop();
  }

  getAll(): Language[] {
    return this.languages;
  }
}
