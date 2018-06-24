import {Language} from './language';

export class Settings {
  currentLanguage: Language;
  numberOfWords: number;

  constructor(values: Object = {}) {
    this.numberOfWords = 20;
    Object.assign(this, values);
  }
}
