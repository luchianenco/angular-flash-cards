import { Language } from './language';

describe('Language', () => {
  it('should create an instance', () => {
    expect(new Language()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const card = new Language({
      id: 1,
      name: 'English',
    });
    expect(card.id).toEqual(1);
    expect(card.name).toEqual('English');
  });
});
