import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEcfDto, UpdateEcfDto } from './ecf.dto';

@Injectable()
export class EcfService {
  constructor(private prisma: PrismaService) {}

  findAll(formationId?: string, candidateId?: string) {
    return this.prisma.eCFEvaluation.findMany({
      where: {
        ...(formationId ? { formationId } : {}),
        ...(candidateId ? { candidateId } : {}),
      },
      include: { formation: { select: { id: true, title: true } } },
      orderBy: { date: 'desc' },
    });
  }

  async findOne(id: string) {
    const e = await this.prisma.eCFEvaluation.findUnique({ where: { id } });
    if (!e) throw new NotFoundException(`Évaluation ECF ${id} introuvable`);
    return e;
  }

  create(dto: CreateEcfDto) {
    const { date, ...rest } = dto;
    return this.prisma.eCFEvaluation.create({ data: { ...rest, date: new Date(date) } });
  }

  async update(id: string, dto: UpdateEcfDto) {
    await this.findOne(id);
    return this.prisma.eCFEvaluation.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.eCFEvaluation.delete({ where: { id } });
  }
}
