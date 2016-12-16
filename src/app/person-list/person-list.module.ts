import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonListComponent} from './person-list.component';
import {MdCheckboxModule, MdCardModule, MdGridListModule, MdButtonModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdCheckboxModule,
        MdButtonModule,
        MdCardModule,
        MdGridListModule
    ],
    declarations: [PersonListComponent],
    exports: [PersonListComponent]
})
export class PersonListModule {
}
