import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Reservation = {
    id: Generated<number>;
    userId: number;
    tableId: number;
    date: Timestamp;
    startTime: Timestamp;
    endTime: Timestamp;
    numberOfGuests: Generated<number>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type Table = {
    id: Generated<number>;
    number: number;
    capacity: Generated<number>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type User = {
    id: Generated<number>;
    name: string;
    email: string;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
};
export type DB = {
    reservations: Reservation;
    tables: Table;
    users: User;
};
