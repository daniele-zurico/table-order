import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  @Input()
  public people: any;

  @Input()
  public filter: string;

  @Output()
  public addGuest: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public removeGuest: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public removePerson: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public toggleAttending: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
