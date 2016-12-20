import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PersonListModule} from './person-list/person-list.module';
import {StoreModule} from '@ngrx/store';
import {table} from './reducer/TableReducer';

// export function initialiseTables() {
//     let people = [];
//     for (let i = 0; i < 3; i++) {
//         let guest = {
//             name: '',
//             status: ''
//         };
//         if (i == 0) {
//             let first_t = [];
//             for (let t1 = 0; t1 < 4; t1++) {
//                 first_t.push(guest);
//             }
//             people.push(first_t);
//         }
//         if (i == 1) {
//             let second_t = [];
//             for (let t1 = 0; t1 < 6; t1++) {
//                 second_t.push(guest);
//             }
//             people.push(second_t);
//         }
//         if (i == 2) {
//             let third_t = [];
//             for (let t1 = 0; t1 < 8; t1++) {
//                 third_t.push(guest);
//             }
//             people.push(third_t);
//         }
//     }
//     return people;
// }

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        FlexLayoutModule.forRoot(),
        StoreModule.provideStore(
            {
                table: table
            }),
        PersonListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
