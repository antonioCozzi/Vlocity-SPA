import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private singlePerson;
  private likes = [];
  private dislikes = [];
  private tastes = {};
  private img = '';
  private name = '';
  private description = '';
  private id = 0;
  private columns = [];
  private people = [];

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.peopleService.getInitData().subscribe(person => {
        this.people = person;
        this.singlePerson = person[this.id];
        this.img = person[this.id]['img'];
        this.name = person[this.id]['name'];
        this.description = person[this.id]['Description'];
        this.likes = person[this.id]['Likes'];
        this.dislikes = person[this.id]['Dislikes'];
        this.columns = ['Likes', 'Dislikes'];
      });
    });
  }

  onClick() {
    alert('There should be a chat over there...');
  }
}
