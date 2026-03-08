import { Controller, Get, Post, Body, Param, Query, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CompetencyBlocksService } from './competency-blocks.service';
import { CreateCompetencyBlockDto, EvaluateBlockDto } from './competency-blocks.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Blocs de compétences')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('competency-blocks')
export class CompetencyBlocksController {
  constructor(private readonly service: CompetencyBlocksService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les blocs de compétences (BC01, BC02, BC03)' })
  findAll(@Query('formationId') formationId?: string) { return this.service.findAll(formationId); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateCompetencyBlockDto) { return this.service.create(dto); }

  @Post(':id/evaluate')
  @ApiOperation({ summary: 'Évaluer un candidat sur ce bloc' })
  evaluate(@Param('id') id: string, @Body() dto: EvaluateBlockDto) { return this.service.evaluate(id, dto); }

  @Get(':id/evaluations')
  getEvaluations(@Param('id') id: string) { return this.service.getEvaluations(id); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }
}
