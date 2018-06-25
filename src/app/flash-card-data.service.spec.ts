import { TestBed, inject } from '@angular/core/testing';

import { FlashCardDataService } from './flash-card-data.service';
import {FlashCard} from './flash-card';
import {Language} from './language';
import {Settings} from './settings';

describe('FlashCardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlashCardDataService]
    });
  });

  it('should be created', inject([FlashCardDataService], (service: FlashCardDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAll()', () => {
    it('should return an empty array by default', inject([FlashCardDataService], (service: FlashCardDataService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all flash cards', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const lang = new Language({id: 1, name: 'English'});
      const card1 = new FlashCard({language: lang, value: 'Education', valueTranslation: 'образование'});
      const card2 = new FlashCard({language: lang, value: 'Developer', valueTranslation: 'разработчик'});
      service.add(card1);
      service.add(card2);
      expect(service.getAll()).toEqual([card1, card2]);
    }));
  });

  describe('#save(card) increment card id', () => {
    it('should automatically assign an incrementing id', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const lang = new Language({id: 1, name: 'English'});
      const settings = new Settings({currentLanguage: lang, numberOfWords: 20});
      const card1 = new FlashCard({language: lang, value: 'Education', valueTranslation: 'образование'});
      const card2 = new FlashCard({language: lang, value: 'Developer', valueTranslation: 'разработчик'});
      service.setSettings(settings);
      service.add(card1);
      service.add(card2);
      expect(service.getById(1)).toEqual(card1);
      expect(service.getById(2)).toEqual(card2);
    }));
  });

  describe('#save(card) set default lang', () => {
    it('should automatically assign current language', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const lang = new Language({id: 1, name: 'English'});
      const settings = new Settings({currentLanguage: lang, numberOfWords: 20});
      const card1 = new FlashCard({value: 'Education', valueTranslation: 'образование'});
      service.setSettings(settings);
      service.add(card1);
      const cardLang = service.getById(1);
      expect(service.getById(1)).toEqual(card1);
      expect(cardLang.language.id).toEqual(1);

    }));
  });

  describe('#setCurrentLanguage(id)', () => {
    it('should change current language by id', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const lang = new Language({id: 3, name: 'English'});
      const settings = new Settings({currentLanguage: lang, numberOfWords: 20});
      service.setSettings(settings);
      service.setCurrentLanguageById(2);
      const card1 = new FlashCard({value: 'Education', valueTranslation: 'образование'});
      service.add(card1);
      const cardLang = service.getById(1);
      expect(service.getById(1)).toEqual(card1);
      expect(cardLang.language.id).toEqual(2);
    }));
  });

  describe('#removeById(id)', () => {

    it('should remove card with the corresponding id', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const lang = new Language({id: 1, name: 'English'});
      const settings = new Settings({currentLanguage: lang, numberOfWords: 20});
      service.setSettings(settings);
      const card1 = new FlashCard({id:1, language: lang, value: 'Education', valueTranslation: 'образование'});
      const card2 = new FlashCard({id:2, language: lang, value: 'Developer', valueTranslation: 'разработчик'});
      service.add(card1);
      service.add(card2);
      service.removeById(1);
      expect(service.getAll()).toEqual([card2]);
      service.removeById(2);
      expect(service.getAll()).toEqual([]);
    }));

    it('should not removing anything if card with corresponding id is not found',
      inject([FlashCardDataService], (service: FlashCardDataService) => {
        const lang = new Language({id: 1, name: 'English'});
        const settings = new Settings({currentLanguage: lang, numberOfWords: 20});
        service.setSettings(settings);
        const card1 = new FlashCard({language: lang, value: 'Education', valueTranslation: 'образование'});
        const card2 = new FlashCard({language: lang, value: 'Developer', valueTranslation: 'разработчик'});
        service.add(card1);
        service.add(card2);
        expect(service.getAll()).toEqual([card1, card2]);
        service.removeById(3);
        expect(service.getAll()).toEqual([card1, card2]);
      }));
  });

  describe('#updateById(id, values)', () => {

    it('should return card with the corresponding id and updated data',
      inject([FlashCardDataService], (service: FlashCardDataService) => {
        const lang = new Language({id: 1, name: 'English'});
        const settings = new Settings({currentLanguage: lang, numberOfWords: 20});
        service.setSettings(settings);
        const card = new FlashCard({id: 1, value: 'Education', valueTranslation: 'образование'});
        service.add(card);
        const updatedCard = service.updateById(1, {
          value: 'Game',
          valueTranslation: 'игра'
        });
        expect(updatedCard.value).toEqual('Game');
    }));

    it('should return null if card is not found', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const lang = new Language({id: 1, name: 'English'});
      const settings = new Settings({currentLanguage: lang, numberOfWords: 20});
      service.setSettings(settings);
      const card = new FlashCard({id: 1, value: 'Education', valueTranslation: 'образование'});
      service.add(card);
      const updatedCard = service.updateById(2, {
        value: 'Game',
        valueTranslation: 'игра'
      });
      expect(updatedCard).toEqual(null);
    }));
  });

  describe('#getByLanguage(lang)', () => {
    it('should get only cards with corresponding language ',
      inject([FlashCardDataService], (service: FlashCardDataService) => {
        const lang = new Language({id: 3, name: 'English'});
        const lang2 = new Language({id: 4, name: 'Deutsch'});
        const card1 = new FlashCard({language: lang, value: 'Education', valueTranslation: 'образование'});
        const card2 = new FlashCard({language: lang2, value: 'Entwickler', valueTranslation: 'разработчик'});
        service.add(card1);
        service.add(card2);
        expect(service.getByLanguage(lang)).toEqual([card1]);
        expect(service.getByLanguage(lang2)).toEqual([card2]);
    }));
  });
});
