import {Component} from '@angular/core';
import {FlashCardDataService} from './flash-card-data.service';
import {LanguageDataService} from './language-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FlashCardDataService, LanguageDataService]
})
export class AppComponent {}
