import { Type } from "class-transformer";
import { IsDateString, IsNumber, IsOptional } from "class-validator";
import { PaginationOptionDto } from "src/common/dto/pagination-option.dto";

export class GetExistingReservationsDto extends PaginationOptionDto  {
 @IsOptional()
  @IsDateString()
  startDate?: Date;

  @IsOptional()
  @IsDateString()
  endDate?: Date;
}
