import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { FormationsService } from './formations.service';
import { CreateFormationDto, UpdateFormationDto, EnrollCandidateDto } from './formations.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Formations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('formations')
export class FormationsController {
  constructor(private readonly service: FormationsService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les formations' })
  findAll() { return this.service.findAll(); }

  @Get(':id')
  findOne(@Param('id') id: string) { return this.service.findOne(id); }

  @Post()
  create(@Body() dto: CreateFormationDto) { return this.service.create(dto); }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateFormationDto) { return this.service.update(id, dto); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }

  @Post(':id/enroll')
  @ApiOperation({ summary: "Inscrire un candidat à une formation" })
  enroll(@Param('id') id: string, @Body() dto: EnrollCandidateDto) { return this.service.enroll(id, dto); }

  @Delete(':id/enroll/:candidateId')
  @ApiOperation({ summary: "Désinscrire un candidat d'une formation" })
  unenroll(@Param('id') id: string, @Param('candidateId') candidateId: string) {
    return this.service.unenroll(id, candidateId);
  }
}
