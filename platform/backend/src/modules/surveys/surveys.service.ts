import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSurveyDto } from './surveys.dto';

@Injectable()
export class SurveysService {
  constructor(private prisma: PrismaService) {}

  findAll(formationId?: string) {
    return this.prisma.satisfactionSurvey.findMany({
      where: formationId ? { formationId } : undefined,
      include: { candidate: true },
      orderBy: { completedAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const s = await this.prisma.satisfactionSurvey.findUnique({ where: { id }, include: { candidate: true } });
    if (!s) throw new NotFoundException(`Questionnaire ${id} introuvable`);
    return s;
  }

  create(dto: CreateSurveyDto) {
    return this.prisma.satisfactionSurvey.create({ data: dto, include: { candidate: true } });
  }

  getAverageScore(formationId?: string) {
    return this.prisma.satisfactionSurvey.aggregate({
      where: formationId ? { formationId } : undefined,
      _avg: { score: true },
      _count: true,
    });
  }
}
