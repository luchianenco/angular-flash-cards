export class FlashCard {
  id: number;
  languageId: number;
  value = '';
  valueTranslation = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
