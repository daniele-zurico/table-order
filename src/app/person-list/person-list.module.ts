import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonListComponent} from './person-list.component';
import {MdCheckboxModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdCheckboxModule
    ],
    declarations: [PersonListComponent],
    exports: [PersonListComponent]
})
export class PersonListModule {
}
