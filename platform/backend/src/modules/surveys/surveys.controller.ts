import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { SurveysService } from './surveys.service';
import { CreateSurveyDto } from './surveys.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Questionnaires de satisfaction')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('surveys')
export class SurveysController {
  constructor(private readonly service: SurveysService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les questionnaires de satisfaction' })
  findAll(@Query('formationId') formationId?: string) { return this.service.findAll(formationId); }

  @Get('stats')
  @ApiOperation({ summary: 'Score moyen de satisfaction' })
  getAverageScore(@Query('formationId') formationId?: string) { return this.service.getAverageScore(formationId); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  @ApiOperation({ summary: 'Soumettre un questionnaire' })
  create(@Body() dto: CreateSurveyDto) { return this.service.create(dto); }
}
