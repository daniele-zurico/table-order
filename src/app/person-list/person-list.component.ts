import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {BookDialogComponent} from '../book-dialog/book-dialog.component';
import {MdDialogRef, MdDialog} from '@angular/material';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {

    @Input()
    public people: any;

    private _dialogRef: MdDialogRef<BookDialogComponent>;

    constructor(public dialog: MdDialog) {
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
            switch (result.action) {
                case 'book':
                    this.bookTable(result, seatId, tableId);
                    break;
                case 'seat':
                    this.seatGuests(tableId, seatId);
                    break;
                case 'cancel':
                    this.cancelBook(tableId, seatId);
                    break;
            }
            this._dialogRef = null;
        });
    }

    /**
     * Book a table with multiple guests
     *
     * @param book
     * @param seatId
     * @param tableId
     */
    private bookTable(book:any, seatId: number, tableId: number): void {
        if (book.guest_number > this.people[tableId].length) {
            alert(book.guest_number + ' guest is too much for this table! Please choose one bigger');
        }
        else {
            // check if I can book table
            let unable_to_seat = false;
            let gn = book.guest_number;
            let si = seatId;
            while (gn > 0) {
                if (this.people[tableId][si].name !== '') {
                    unable_to_seat = true;
                    alert('unable to seat the guests together on the same table');
                    return;
                }
                (si + 1) >= this.people[tableId].length ? si = 0 : si++;
                gn--;
            }
            // book table
            while (book.guest_number > 0) {
                this.people[tableId][seatId] = {
                    name: book.guest_name,
                    status: 'book'
                };
                if (seatId + 1 >= this.people[tableId].length && this.people[tableId][0].name === '') {
                    seatId = 0;
                }
                else {
                    seatId++;
                }
                book.guest_number--;
            }
        }
    }

    /**
     * Cancel a reservation
     *
     * @param tableId
     * @param seatId
     * @returns {any}
     */
    private cancelBook(tableId: number, seatId: number): void {
        this.people[tableId][seatId] = {
            name: '',
            status: ''
        };
    }

    /**
     * After booking you can seat guests
     *
     * @param tableId
     * @param seatId
     */
    private seatGuests(tableId: number, seatId: number): void {
        this.people[tableId][seatId].status = 'seated';
    }

}
