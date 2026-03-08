import {
  Controller, Get, Post, Put, Delete, Body, Param, Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto, UpdateCandidateDto } from './candidates.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Candidats')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('candidates')
export class CandidatesController {
  constructor(private readonly service: CandidatesService) {}

  @Get()
  @ApiOperation({ summary: 'Lister tous les candidats' })
  findAll(@Query('search') search?: string) {
    return this.service.findAll(search);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Statistiques des candidats par statut' })
  getStats() {
    return this.service.getStats();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtenir un candidat' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un candidat' })
  create(@Body() dto: CreateCandidateDto) {
    return this.service.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modifier un candidat' })
  update(@Param('id') id: string, @Body() dto: UpdateCandidateDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un candidat' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
