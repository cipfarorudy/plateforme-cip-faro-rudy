import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCompetencyBlockDto, EvaluateBlockDto } from './competency-blocks.dto';

@Injectable()
export class CompetencyBlocksService {
  constructor(private prisma: PrismaService) {}

  findAll(formationId?: string) {
    return this.prisma.competencyBlock.findMany({
      where: formationId ? { formationId } : undefined,
      include: { evaluations: true, formation: { select: { id: true, title: true } } },
    });
  }

  async findOne(id: string) {
    const b = await this.prisma.competencyBlock.findUnique({
      where: { id },
      include: { evaluations: true, formation: true },
    });
    if (!b) throw new NotFoundException(`Bloc de compétence ${id} introuvable`);
    return b;
  }

  create(dto: CreateCompetencyBlockDto) {
    return this.prisma.competencyBlock.create({ data: dto });
  }

  async evaluate(blockId: string, dto: EvaluateBlockDto) {
    const data: any = {
      competencyBlockId: blockId,
      candidateId: dto.candidateId,
      status: dto.status,
      score: dto.score,
      notes: dto.notes,
      evaluatedAt: new Date(),
    };
    return this.prisma.blockEvaluation.upsert({
      where: { id: `${blockId}-${dto.candidateId}` },
      update: data,
      create: data,
    });
  }

  getEvaluations(blockId: string) {
    return this.prisma.blockEvaluation.findMany({
      where: { competencyBlockId: blockId },
      include: { competencyBlock: true },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.competencyBlock.delete({ where: { id } });
  }
}
