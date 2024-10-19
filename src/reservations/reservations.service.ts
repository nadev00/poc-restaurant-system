import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Kysely, sql } from 'kysely';
import { DB } from 'src/database/database.type';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { SEATING_TIME_PER_TABLE_HOURS } from 'src/config';
import { GetExistingReservationsDto } from './dto/get-existing-reservations.dto';

@Injectable()
export class ReservationsService {
  constructor(@Inject('DATABASE') private readonly db: Kysely<DB>) {}

  async create(dto: CreateReservationDto) {
    const { startTime, userId, tableId, numberOfGuests } = dto;

    const date = new Date(startTime);
    date.setHours(0, 0, 0, 0);

    const existingReservation = await this.db
      .selectFrom('reservations')
      .where('date', '=', date)
      .where('tableId', '=', tableId)
      .where('startTime', '=', startTime)
      .executeTakeFirst();

    if (existingReservation) {
      throw new ConflictException('Reservation already exists');
    }


    const reservation = await this.db
      .insertInto('reservations')
      .values({
        date,
        startTime: new Date(startTime),
        endTime: this.getEndTime(startTime),
        userId,
        tableId,
        numberOfGuests,
        updatedAt: new Date(),
      })
      .execute();

      return reservation;
  }

  getEndTime(startTime: Date): Date {
    const endTime = new Date(startTime);
    endTime.setHours(endTime.getHours() + SEATING_TIME_PER_TABLE_HOURS);
    return endTime;
  }

  async getReservationsByDateRange(dto: GetExistingReservationsDto) {
    const { startDate, endDate, page, pageSize } = dto;
    
    const offset = (page - 1) * pageSize;

    let query = this.db
      .selectFrom('reservations')
      .selectAll();

    if (startDate) {
      query = query.where('date', '>=', new Date(startDate));
    }

    if (endDate) {
      query = query.where('date', '<=', new Date(endDate));
    }

    const reservations = await query
      .orderBy('date')
      .orderBy('startTime')
      .limit(pageSize)
      .offset(offset)
      .execute();

    let countQuery = this.db
      .selectFrom('reservations')
      .select(({ fn }) => [fn.count('id').as('count')]);

    if (startDate) {
      countQuery = countQuery.where('date', '>=', new Date(startDate));
    }

    if (endDate) {
      countQuery = countQuery.where('date', '<=', new Date(endDate));
    }

    const totalCount = await countQuery.executeTakeFirstOrThrow();

    return {
      data: reservations,
      meta: {
        currentPage: page,
        pageSize: pageSize,
        totalCount: Number(totalCount.count),
        totalPages: Math.ceil(Number(totalCount.count) / pageSize),
      },
    };
  }
}
