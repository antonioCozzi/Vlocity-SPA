import { TestBed } from '@angular/core/testing';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PeopleService } from '../people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private filteredPeople;

  constructor(private peopleService: PeopleService) {
    this.filteredPeople = peopleService.filteredPeople;
  }

  ngOnInit() { }
}
