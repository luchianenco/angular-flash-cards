import { TestBed, inject } from '@angular/core/testing';

import { FlashCardDataService } from './flash-card-data.service';
import {FlashCard} from './flash-card';

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
      const card1 = new FlashCard({languageId: 1, value: 'Education', valueTranslation: 'образование'});
      const card2 = new FlashCard({languageId: 1, value: 'Developer', valueTranslation: 'разработчик'});
      service.add(card1);
      service.add(card2);
      expect(service.getAll()).toEqual([card1, card2]);
    }));
  });

  describe('#save(card)', () => {
    it('should automatically assign an incrementing id', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const card1 = new FlashCard({languageId: 1, value: 'Education', valueTranslation: 'образование'});
      const card2 = new FlashCard({languageId: 1, value: 'Developer', valueTranslation: 'разработчик'});
      service.add(card1);
      service.add(card2);
      expect(service.getById(1)).toEqual(card1);
      expect(service.getById(2)).toEqual(card2);
    }));
  });

  describe('#removeById(id)', () => {

    it('should remove card with the corresponding id', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const card1 = new FlashCard({languageId: 1, value: 'Education', valueTranslation: 'образование'});
      const card2 = new FlashCard({languageId: 1, value: 'Developer', valueTranslation: 'разработчик'});
      service.add(card1);
      service.add(card2);
      expect(service.getAll()).toEqual([card1, card2]);
      service.removeById(1);
      expect(service.getAll()).toEqual([card2]);
      service.removeById(2);
      expect(service.getAll()).toEqual([]);
    }));

    it('should not removing anything if card with corresponding id is not found',
      inject([FlashCardDataService], (service: FlashCardDataService) => {
        const card1 = new FlashCard({languageId: 1, value: 'Education', valueTranslation: 'образование'});
        const card2 = new FlashCard({languageId: 1, value: 'Developer', valueTranslation: 'разработчик'});
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
      const card = new FlashCard({languageId: 1, value: 'Education', valueTranslation: 'образование'});
      service.add(card);
      const updatedCard = service.updateById(1, {
        value: 'Game',
        valueTranslation: 'игра'
      });
      expect(updatedCard.value).toEqual('Game');
    }));

    it('should return null if card is not found', inject([FlashCardDataService], (service: FlashCardDataService) => {
      const card = new FlashCard({languageId: 1, value: 'Education', valueTranslation: 'образование'});
      service.add(card);
      const updatedCard = service.updateById(2, {
        value: 'Game',
        valueTranslation: 'игра'
      });
      expect(updatedCard).toEqual(null);
    }));
  });

  describe('#getByLanguageId(id, values)', () => {
    it('should get only cards with corresponding language id',
      inject([FlashCardDataService], (service: FlashCardDataService) => {
        const card1 = new FlashCard({languageId: 1, value: 'Education', valueTranslation: 'образование'});
        const card2 = new FlashCard({languageId: 2, value: 'Entwickler', valueTranslation: 'разработчик'});
        service.add(card1);
        service.add(card2);
        expect(service.getByLanguageId(1)).toEqual([card1]);
        expect(service.getByLanguageId(2)).toEqual([card2]);
    }));
  });
});
