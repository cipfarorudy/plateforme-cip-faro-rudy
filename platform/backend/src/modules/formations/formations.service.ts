import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFormationDto, UpdateFormationDto, EnrollCandidateDto } from './formations.dto';

@Injectable()
export class FormationsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.formation.findMany({
      include: {
        formateur: { select: { id: true, firstName: true, lastName: true } },
        _count: { select: { enrollments: true } },
      },
      orderBy: { startDate: 'desc' },
    });
  }

  async findOne(id: string) {
    const f = await this.prisma.formation.findUnique({
      where: { id },
      include: {
        formateur: true,
        enrollments: { include: { candidate: true } },
        sessions: { orderBy: { date: 'asc' } },
        competencyBlocks: true,
        ecfEvaluations: true,
      },
    });
    if (!f) throw new NotFoundException(`Formation ${id} introuvable`);
    return f;
  }

  create(dto: CreateFormationDto) {
    const { startDate, endDate, ...rest } = dto;
    return this.prisma.formation.create({
      data: { ...rest, startDate: new Date(startDate), endDate: new Date(endDate) },
    });
  }

  async update(id: string, dto: UpdateFormationDto) {
    await this.findOne(id);
    const { startDate, endDate, ...rest } = dto;
    return this.prisma.formation.update({
      where: { id },
      data: {
        ...rest,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.formation.delete({ where: { id } });
  }

  async enroll(id: string, dto: EnrollCandidateDto) {
    return this.prisma.formationEnrollment.create({
      data: { formationId: id, candidateId: dto.candidateId, notes: dto.notes },
      include: { candidate: true, formation: true },
    });
  }

  async unenroll(formationId: string, candidateId: string) {
    return this.prisma.formationEnrollment.delete({
      where: { candidateId_formationId: { candidateId, formationId } },
    });
  }
}
