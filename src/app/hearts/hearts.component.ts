import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-hearts',
  templateUrl: './hearts.component.html',
  styleUrls: ['./hearts.component.scss']
})

export class HeartsComponent implements OnInit {
  private rating;
  private maxRating = 5;
  private range = [];
  private id;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.peopleService.getInitData().subscribe(person => {
        this.rating = person[this.id]['rating'];
      });
    });
  }

  ngOnInit() {
    for (let index = 0; index < this.maxRating; index++) {
      this.range.push(index);
    }
  }

  public isMarked = (index) => {
    if (this.rating >= index + 1) {
      return 'fa-heart';
    } else if (this.rating > index && this.rating < index + 1) {
      return 'fa-heart-half-o';
    } else {
      return 'fa-heart-o';
    }
  }
}
