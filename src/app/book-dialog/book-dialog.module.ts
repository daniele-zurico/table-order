import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookDialogComponent} from './book-dialog.component';
import {MdCardModule, MdButtonModule, MdInputModule, MdCheckboxModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        MdInputModule,
        MdButtonModule,
        MdCheckboxModule
    ],
    declarations: [BookDialogComponent],
    exports: [BookDialogComponent],
    entryComponents: [BookDialogComponent]
})
export class BookDialogModule {
}
