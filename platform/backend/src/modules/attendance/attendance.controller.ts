import { Controller, Get, Post, Put, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto, CreateSessionDto, SignAttendanceDto } from './attendance.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Émargement')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly service: AttendanceService) {}

  @Get('sessions')
  @ApiOperation({ summary: 'Lister les séances' })
  getSessions(@Query('formationId') formationId?: string) { return this.service.getSessions(formationId); }

  @Get('sessions/:id')
  getSession(@Param('id') id: string) { return this.service.getSession(id); }

  @Post('sessions')
  @ApiOperation({ summary: 'Créer une séance' })
  createSession(@Body() dto: CreateSessionDto) { return this.service.createSession(dto); }

  @Get()
  @ApiOperation({ summary: "Lister les émargements" })
  getAttendances(@Query('sessionId') sessionId?: string, @Query('candidateId') candidateId?: string) {
    return this.service.getAttendances(sessionId, candidateId);
  }

  @Post()
  @ApiOperation({ summary: "Marquer la présence d'un candidat" })
  markAttendance(@Body() dto: CreateAttendanceDto) { return this.service.markAttendance(dto); }

  @Put(':sessionId/sign/:candidateId')
  @ApiOperation({ summary: 'Signer une feuille de présence' })
  sign(
    @Param('sessionId') sessionId: string,
    @Param('candidateId') candidateId: string,
    @Body() dto: SignAttendanceDto,
  ) {
    return this.service.sign(sessionId, candidateId, dto);
  }
}
