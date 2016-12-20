import {Component} from '@angular/core';
import {BookDialogComponent} from '../book-dialog/book-dialog.component';
import {MdDialogRef, MdDialog} from '@angular/material';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {


    private people: Array<any>;

    private _dialogRef: MdDialogRef<BookDialogComponent>;

    constructor(public dialog: MdDialog,
                private _store: Store<any>) {
        _store.select('table')
            .subscribe((table: Array<any>) => {
                this.people = table;
            });
    }

    public openDialog(tableId: number, seatId: number, action: string, guestName: string): void {
        this._dialogRef = this.dialog.open(BookDialogComponent, {
            disableClose: false,
            width: '282px'
        });

        this._dialogRef.componentInstance.tableId = tableId;
        this._dialogRef.componentInstance.seatId = seatId;
        this._dialogRef.componentInstance.action = action;
        this._dialogRef.componentInstance.guestName = guestName;

        this._dialogRef.afterClosed().subscribe((result) => {
            this._store.dispatch({
                type: result.action, payload: {
                    book: result,
                    seatId: seatId,
                    tableId: tableId
                }
            });
            this._dialogRef = null;
        });
    }
}
