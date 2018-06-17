import {Language} from './language';

export class FlashCard {
  id: number;
  language: Language;
  value = '';
  valueTranslation = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
