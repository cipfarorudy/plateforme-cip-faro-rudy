import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAttendanceDto, CreateSessionDto, SignAttendanceDto } from './attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  // Sessions
  getSessions(formationId?: string) {
    return this.prisma.session.findMany({
      where: formationId ? { formationId } : undefined,
      include: {
        formation: { select: { id: true, title: true } },
        attendances: true,
      },
      orderBy: { date: 'asc' },
    });
  }

  async getSession(id: string) {
    const s = await this.prisma.session.findUnique({
      where: { id },
      include: {
        formation: true,
        attendances: true,
      },
    });
    if (!s) throw new NotFoundException(`Séance ${id} introuvable`);
    return s;
  }

  createSession(dto: CreateSessionDto) {
    const { date, ...rest } = dto;
    return this.prisma.session.create({ data: { ...rest, date: new Date(date) } });
  }

  // Attendance
  getAttendances(sessionId?: string, candidateId?: string) {
    return this.prisma.attendance.findMany({
      where: {
        ...(sessionId ? { sessionId } : {}),
        ...(candidateId ? { candidateId } : {}),
      },
      include: { session: true },
    });
  }

  markAttendance(dto: CreateAttendanceDto) {
    return this.prisma.attendance.upsert({
      where: { sessionId_candidateId: { sessionId: dto.sessionId, candidateId: dto.candidateId } },
      update: { status: dto.status, comment: dto.comment },
      create: {
        sessionId: dto.sessionId,
        candidateId: dto.candidateId,
        status: dto.status,
        comment: dto.comment,
      },
    });
  }

  async sign(sessionId: string, candidateId: string, dto: SignAttendanceDto) {
    return this.prisma.attendance.update({
      where: { sessionId_candidateId: { sessionId, candidateId } },
      data: { signedAt: dto.signedAt ? new Date(dto.signedAt) : new Date() },
    });
  }
}
