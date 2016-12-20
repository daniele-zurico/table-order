import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public people = [];

    constructor() {
    }

    public ngOnInit(): void {
        this.initialiseTables();
    }

    /**
     * Initialize the table for guests
     */
    private initialiseTables() {
        for (let i = 0; i < 3; i++) {
            let guest = {
                name: '',
                status: ''
            };
            if (i == 0) {
                let first_t = [];
                for (let t1 = 0; t1 < 4; t1++) {
                    first_t.push(guest);
                }
                this.people.push(first_t);
            }
            if (i == 1) {
                let second_t = [];
                for (let t1 = 0; t1 < 6; t1++) {
                    second_t.push(guest);
                }
                this.people.push(second_t);
            }
            if (i == 2) {
                let third_t = [];
                for (let t1 = 0; t1 < 8; t1++) {
                    third_t.push(guest);
                }
                this.people.push(third_t);
            }
        }
    }


}
