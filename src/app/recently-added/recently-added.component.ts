import { Component, OnInit } from '@angular/core';
import {FlashCardDataService} from '../flash-card-data.service';
import {FlashCard} from '../flash-card';

@Component({
  selector: 'app-recently-added',
  templateUrl: './recently-added.component.html',
  styleUrls: ['./recently-added.component.css']
})

export class RecentlyAddedComponent implements OnInit {

  newCard: FlashCard = new FlashCard();

  constructor(private flashCardService: FlashCardDataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.flashCardService.add(this.newCard);
    this.newCard = new FlashCard();
  }

  get cards() {
    return this.flashCardService.getAll();
  }
}
