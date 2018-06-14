import { FlashCard } from './flash-card';

describe('FlashCard', () => {
  it('should create an instance', () => {
    expect(new FlashCard()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const card = new FlashCard({
      id: 123,
      languageId: 1,
      value: 'Education',
      valueTranslation: 'образование'
    });
    expect(card.id).toEqual(123);
    expect(card.languageId).toEqual(1);
    expect(card.value).toEqual('Education');
    expect(card.valueTranslation).toEqual('образование');
  });

});
