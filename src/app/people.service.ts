import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {
  people = [];
  filteredPeople = [];

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    return this.http.get('../assets/people.json').map(res => res).subscribe(res => {
      this.people = res['People'];
      this.filteredPeople = this.people;
    });
  }

  getInitData() {
    return this.http.get('../assets/people.json').map(res => res['People']);
  }

  getFilteredPeople() {
    return this.filteredPeople;
  }

  initPeople() {
    this.people = Object.assign([], this.people);
    return this.people;
  }

  filterPeople(value = '') {
    if (value === '') { this.initPeople(); }
    this.filteredPeople = Object.assign([], this.people).filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }
}
