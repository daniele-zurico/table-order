import {Component, OnInit} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-book-dialog',
    templateUrl: './book-dialog.component.html',
    styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent implements OnInit {

    public tableId: number;
    public seatId: number;
    public action: string;
    public guestName: string;

    constructor(public dialogRef: MdDialogRef<BookDialogComponent>) {
    }

    ngOnInit() {
    }

}
