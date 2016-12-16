import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonInputComponent} from './person-input.component';
import {MdInputModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdInputModule
    ],
    declarations: [PersonInputComponent],
    exports: [PersonInputComponent]
})
export class PersonInputModule {
}
