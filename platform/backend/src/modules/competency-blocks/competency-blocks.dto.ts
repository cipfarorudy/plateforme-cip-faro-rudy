import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BlockStatus } from '@prisma/client';

export class CreateCompetencyBlockDto {
  @ApiProperty()
  @IsString()
  formationId: string;

  @ApiProperty({ example: 'BC01' })
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  objectives?: any;
}

export class EvaluateBlockDto {
  @ApiProperty()
  @IsString()
  candidateId: string;

  @ApiProperty({ enum: BlockStatus })
  @IsEnum(BlockStatus)
  status: BlockStatus;

  @ApiPropertyOptional()
  @IsOptional()
  score?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
