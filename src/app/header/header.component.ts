import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private filteredPeople = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  filterPeople(payload) {
    this.peopleService.filterPeople(payload);
  }
}
