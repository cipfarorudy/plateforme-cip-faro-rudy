import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePlacementTestDto, UpdatePlacementTestDto } from './placement-tests.dto';

@Injectable()
export class PlacementTestsService {
  constructor(private prisma: PrismaService) {}

  findAll(candidateId?: string) {
    return this.prisma.placementTest.findMany({
      where: candidateId ? { candidateId } : undefined,
      include: { candidate: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const test = await this.prisma.placementTest.findUnique({
      where: { id },
      include: { candidate: true },
    });
    if (!test) throw new NotFoundException(`Test de positionnement ${id} introuvable`);
    return test;
  }

  create(dto: CreatePlacementTestDto) {
    const { date, ...rest } = dto;
    return this.prisma.placementTest.create({
      data: { ...rest, date: date ? new Date(date) : new Date() },
      include: { candidate: true },
    });
  }

  async update(id: string, dto: UpdatePlacementTestDto) {
    await this.findOne(id);
    return this.prisma.placementTest.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.placementTest.delete({ where: { id } });
  }
}
