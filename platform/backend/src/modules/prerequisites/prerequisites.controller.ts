import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { PrerequisitesService } from './prerequisites.service';
import { CreatePrerequisiteDto, UpdatePrerequisiteDto } from './prerequisites.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Prérequis')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('prerequisites')
export class PrerequisitesController {
  constructor(private readonly service: PrerequisitesService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les prérequis' })
  findAll(@Query('candidateId') candidateId?: string) { return this.service.findAll(candidateId); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreatePrerequisiteDto) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePrerequisiteDto) { return this.service.update(id, dto); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }
}
