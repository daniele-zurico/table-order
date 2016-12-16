import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FilterSelectModule} from './filter-select/filter-select.module';
import {PersonInputModule} from './person-input/person-input.module';
import {PersonListModule} from './person-list/person-list.module';

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
        FilterSelectModule,
        PersonInputModule,
        PersonListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
