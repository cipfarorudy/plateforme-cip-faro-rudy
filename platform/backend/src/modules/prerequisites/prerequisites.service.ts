import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePrerequisiteDto, UpdatePrerequisiteDto } from './prerequisites.dto';

@Injectable()
export class PrerequisitesService {
  constructor(private prisma: PrismaService) {}

  findAll(candidateId?: string) {
    return this.prisma.prerequisite.findMany({
      where: candidateId ? { candidateId } : undefined,
      include: { candidate: true },
    });
  }

  async findOne(id: string) {
    const p = await this.prisma.prerequisite.findUnique({ where: { id }, include: { candidate: true } });
    if (!p) throw new NotFoundException(`Prérequis ${id} introuvable`);
    return p;
  }

  create(dto: CreatePrerequisiteDto) {
    return this.prisma.prerequisite.create({ data: dto });
  }

  async update(id: string, dto: UpdatePrerequisiteDto) {
    await this.findOne(id);
    const data: any = { ...dto };
    if (dto.validated) data.validatedAt = new Date();
    return this.prisma.prerequisite.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.prerequisite.delete({ where: { id } });
  }
}
