import { TestBed, inject } from '@angular/core/testing';

import { LanguageDataService } from './language-data.service';

describe('LanguageDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageDataService]
    });
  });

  it('should be created', inject([LanguageDataService], (service: LanguageDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all languages', inject([LanguageDataService], (service: LanguageDataService) => {
    expect(service.getAll().length).toEqual(2);
  }));
});
