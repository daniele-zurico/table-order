import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonListComponent} from './person-list.component';
import {
    MdCheckboxModule, MdCardModule, MdGridListModule, MdButtonModule,
    MdDialogModule
} from '@angular/material';
import {BookDialogModule} from '../book-dialog/book-dialog.module';
import {Store, StoreModule} from '@ngrx/store';

@NgModule({
    imports: [
        CommonModule,
        MdCheckboxModule,
        MdButtonModule,
        MdCardModule,
        MdDialogModule,
        BookDialogModule,
        MdGridListModule
    ],
    declarations: [PersonListComponent],
    exports: [PersonListComponent]
})
export class PersonListModule {

}
