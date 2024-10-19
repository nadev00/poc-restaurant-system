import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { GetExistingReservationsDto } from './dto/get-existing-reservations.dto';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new reservation' })
  async createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get existing reservations' })
  async getExistingReservations(@Query() dto: GetExistingReservationsDto) {
    return this.reservationsService.getReservationsByDateRange(dto);
  }
}
