import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { EcfService } from './ecf.service';
import { CreateEcfDto, UpdateEcfDto } from './ecf.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('ECF – Évaluations en cours de formation')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('ecf')
export class EcfController {
  constructor(private readonly service: EcfService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les évaluations ECF' })
  findAll(@Query('formationId') formationId?: string, @Query('candidateId') candidateId?: string) {
    return this.service.findAll(formationId, candidateId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateEcfDto) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEcfDto) { return this.service.update(id, dto); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }
}
