import { IsString, IsOptional, IsEnum, IsNumber, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FormationStatus } from '@prisma/client';

export class CreateFormationDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  endDate: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  formateurId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  maxStudents?: number;
}

export class UpdateFormationDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ enum: FormationStatus })
  @IsOptional()
  @IsEnum(FormationStatus)
  status?: FormationStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  formateurId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  maxStudents?: number;
}

export class EnrollCandidateDto {
  @ApiProperty()
  @IsString()
  candidateId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
