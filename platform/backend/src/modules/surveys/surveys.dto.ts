import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSurveyDto {
  @ApiProperty()
  @IsString()
  candidateId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  formationId?: string;

  @ApiProperty()
  responses: any;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  score?: number;
}
