import { Settings } from './settings';
import {Language} from './language';

describe('Settings', () => {
  it('should create an instance', () => {
    expect(new Settings()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const lang = new Language({id: 1, name: 'English'});
    const settings = new Settings({
      currentLanguage: lang,
      numberOfWords: 20,
    });
    expect(settings.currentLanguage).toEqual(lang);
    expect(settings.numberOfWords).toEqual(20);
  });
});
