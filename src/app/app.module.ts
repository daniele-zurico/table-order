import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import {PersonListModule} from './person-list/person-list.module';
import {table} from './reducer/TableReducer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

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
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        PersonListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
