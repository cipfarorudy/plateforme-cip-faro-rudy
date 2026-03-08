import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CertificateType } from '@prisma/client';

export class CreateCertificateDto {
  @ApiProperty()
  @IsString()
  candidateId: string;

  @ApiProperty({ enum: CertificateType })
  @IsEnum(CertificateType)
  type: CertificateType;

  @ApiProperty()
  @IsString()
  reference: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  validUntil?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  notes?: string;
}
