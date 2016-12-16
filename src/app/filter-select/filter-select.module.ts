import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterSelectComponent} from './filter-select.component';
import {MdSelectModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdSelectModule
    ],
    declarations: [FilterSelectComponent],
    exports: [FilterSelectComponent]
})
export class FilterSelectModule {
}
