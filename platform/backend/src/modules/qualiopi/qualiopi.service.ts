import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateQualiopiIndicatorDto, UpdateQualiopiIndicatorDto } from './qualiopi.dto';

@Injectable()
export class QualiopiService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.qualiopiIndicator.findMany({ orderBy: { code: 'asc' } });
  }

  async findOne(id: string) {
    const q = await this.prisma.qualiopiIndicator.findUnique({ where: { id } });
    if (!q) throw new NotFoundException(`Indicateur Qualiopi ${id} introuvable`);
    return q;
  }

  create(dto: CreateQualiopiIndicatorDto) {
    return this.prisma.qualiopiIndicator.create({ data: dto });
  }

  async update(id: string, dto: UpdateQualiopiIndicatorDto) {
    await this.findOne(id);
    return this.prisma.qualiopiIndicator.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.qualiopiIndicator.delete({ where: { id } });
  }

  async getDashboard() {
    const indicators = await this.findAll();
    const totalCandidates = await this.prisma.candidate.count();
    const activeFormations = await this.prisma.formation.count({ where: { status: 'EN_COURS' } });
    const completedFormations = await this.prisma.formation.count({ where: { status: 'TERMINEE' } });
    const surveyStats = await this.prisma.satisfactionSurvey.aggregate({ _avg: { score: true }, _count: true });
    return {
      indicators,
      totalCandidates,
      activeFormations,
      completedFormations,
      satisfactionScore: surveyStats._avg.score,
      totalSurveys: surveyStats._count,
    };
  }
}
