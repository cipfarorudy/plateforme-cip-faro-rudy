import { Controller, Get, Post, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from './certificates.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Attestations & Certificats')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('certificates')
export class CertificatesController {
  constructor(private readonly service: CertificatesService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les attestations' })
  findAll(@Query('candidateId') candidateId?: string) { return this.service.findAll(candidateId); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  @ApiOperation({ summary: "Émettre une attestation" })
  create(@Body() dto: CreateCertificateDto) { return this.service.create(dto); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }
}
