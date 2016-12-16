import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonInputComponent} from './person-input.component';
import {MdInputModule, MdButtonModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdInputModule,
        MdButtonModule
    ],
    declarations: [PersonInputComponent],
    exports: [PersonInputComponent]
})
export class PersonInputModule {
}
