import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateReservationDto {
  @IsNotEmpty()
  @IsDateString()
  startTime: Date;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  tableId: number;

  @IsNotEmpty()
  @IsNumber()
  numberOfGuests: number;
}
