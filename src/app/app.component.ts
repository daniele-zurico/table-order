import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public people = [];
  public filter = 'ALL';

  constructor() {
  }

  public updateFilter(filter: string): void {
    this.filter = filter;
  }

  public addPerson(name: string): void {
    this.people.push({
      name,
      guests: 0,
      attending: false
    })
  }

  public addGuest(person): void {
    person.guests += 1;
  }

  public removeGuest(person): void {
    person.guests -= 1;
  }

  public removePerson(person): void {
    const index = this.people.indexOf(person);
    this.people.splice(index, 1);
  }

  public toggleAttending(person): void {
    person.attending = !person.attending;
  }
}
