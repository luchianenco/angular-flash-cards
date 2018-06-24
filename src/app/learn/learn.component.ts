import { Component, OnInit } from '@angular/core';
import {FlashCardDataService} from '../flash-card-data.service';
import {FlashCard} from '../flash-card';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  providers: [FlashCardDataService]
})

export class LearnComponent implements OnInit {
  cardCounter: number = 0;
  correctCardCounter: number = 0;
  cards: FlashCard[];
  nextCard: FlashCard;
  submitted: boolean = false;
  answer: string = '';
  showLearnResults: boolean = false;

  constructor(private flashCardService: FlashCardDataService) {
    this.cards = flashCardService.getAll();
    this.nextCard = this.getNextCard();
  }

  ngOnInit() {
  }

  getNextCard(): FlashCard {
    if (this.cards.length === 0) {
      this.showLearnResults = true;
      return;
    }
    const index = Math.floor(Math.random() * this.cards.length);
    const nextCard =  this.cards[index];
    this.cards.splice(index, 1);

    return nextCard;
  }

  onSubmit() {
    this.submitted = true;

    if (this.answer === this.nextCard.valueTranslation) {
      this.correctCardCounter++;
    }
    this.answer = '';
    this.nextCard = this.getNextCard();
    this.cardCounter++;
    this.submitted = false;
  }
}
