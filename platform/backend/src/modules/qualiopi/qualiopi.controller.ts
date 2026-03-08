import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { QualiopiService } from './qualiopi.service';
import { CreateQualiopiIndicatorDto, UpdateQualiopiIndicatorDto } from './qualiopi.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Indicateurs Qualiopi')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('qualiopi')
export class QualiopiController {
  constructor(private readonly service: QualiopiService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les indicateurs Qualiopi' })
  findAll() { return this.service.findAll(); }

  @Get('dashboard')
  @ApiOperation({ summary: 'Tableau de bord Qualiopi' })
  getDashboard() { return this.service.getDashboard(); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateQualiopiIndicatorDto) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateQualiopiIndicatorDto) { return this.service.update(id, dto); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }
}
