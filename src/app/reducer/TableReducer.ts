import {Action} from '@ngrx/store';

export const BOOK = 'BOOK';
export const SEAT = 'SEAT';
export const CANCEL = 'CANCEL';

export function initialiseTables() {
    let people = [];
    for (let i = 0; i < 3; i++) {
        let guest = {
            name: '',
            status: ''
        };
        if (i == 0) {
            let first_t = [];
            for (let t1 = 0; t1 < 4; t1++) {
                first_t.push(guest);
            }
            people.push(first_t);
        }
        if (i == 1) {
            let second_t = [];
            for (let t1 = 0; t1 < 6; t1++) {
                second_t.push(guest);
            }
            people.push(second_t);
        }
        if (i == 2) {
            let third_t = [];
            for (let t1 = 0; t1 < 8; t1++) {
                third_t.push(guest);
            }
            people.push(third_t);
        }
    }
    return people;
}

export function table(state: any = initialiseTables(), action: Action) {
    switch (action.type) {
        case BOOK:
            if (action.payload.book.guest_number > state[action.payload.tableId].length) {
                alert(action.payload.book.guest_number + ' guest is too much for this table! Please choose one bigger');
            }
            else {
                // check if I can book table
                let unable_to_seat = false;
                let gn = action.payload.book.guest_number;
                let si = action.payload.seatId;
                while (gn > 0) {
                    if (state[action.payload.tableId][si].name !== '') {
                        unable_to_seat = true;
                        alert('unable to seat the guests together on the same table');
                        return;
                    }
                    (si + 1) >= state[action.payload.tableId].length ? si = 0 : si++;
                    gn--;
                }
                // book table
                while (action.payload.book.guest_number > 0) {
                    state[action.payload.tableId][action.payload.seatId] = {
                        name: action.payload.book.guest_name,
                        status: 'book'
                    };
                    if (action.payload.seatId + 1 >= state[action.payload.tableId].length && state[action.payload.tableId][0].name === '') {
                        action.payload.seatId = 0;
                    }
                    else {
                        action.payload.seatId++;
                    }
                    action.payload.book.guest_number--;
                }
            }
            return state;
        case SEAT:
            state[action.payload.tableId][action.payload.seatId].status = 'seated';
            return state;
        case CANCEL:
            state[action.payload.tableId][action.payload.seatId] = {
                name: '',
                status: ''
            };
            return state;
        default:
            return state;
    }
};