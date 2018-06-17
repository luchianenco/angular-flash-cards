import { Component, OnInit } from '@angular/core';
import {FlashCardDataService} from '../flash-card-data.service';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css'],
  providers: [FlashCardDataService]
})
export class RecentlyAddedComponent implements OnInit {

  constructor(private flashCardService: FlashCardDataService) { }

  ngOnInit() {
  }

  get cards() {
    return this.flashCardService.getAll();
  }
}
