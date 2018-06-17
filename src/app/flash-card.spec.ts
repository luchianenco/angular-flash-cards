import { FlashCard } from './flash-card';
import {Language} from './language';

describe('FlashCard', () => {
  it('should create an instance', () => {
    expect(new FlashCard()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const lang = new Language();
    const card = new FlashCard({
      id: 123,
      language: lang,
      value: 'Education',
      valueTranslation: 'образование'
    });
    expect(card.id).toEqual(123);
    expect(card.language).toEqual(lang);
    expect(card.value).toEqual('Education');
    expect(card.valueTranslation).toEqual('образование');
  });

});
