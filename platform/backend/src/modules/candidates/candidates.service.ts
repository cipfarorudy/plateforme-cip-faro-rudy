import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCandidateDto, UpdateCandidateDto } from './candidates.dto';

@Injectable()
export class CandidatesService {
  constructor(private prisma: PrismaService) {}

  findAll(search?: string) {
    return this.prisma.candidate.findMany({
      where: search
        ? {
            OR: [
              { firstName: { contains: search, mode: 'insensitive' } },
              { lastName: { contains: search, mode: 'insensitive' } },
              { email: { contains: search, mode: 'insensitive' } },
            ],
          }
        : undefined,
      orderBy: { createdAt: 'desc' },
      include: { formations: { include: { formation: true } } },
    });
  }

  async findOne(id: string) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { id },
      include: {
        placementTests: true,
        prerequisites: true,
        contracts: true,
        formations: { include: { formation: true } },
        certificates: true,
        surveys: true,
      },
    });
    if (!candidate) throw new NotFoundException(`Candidat ${id} introuvable`);
    return candidate;
  }

  create(dto: CreateCandidateDto) {
    return this.prisma.candidate.create({ data: dto });
  }

  async update(id: string, dto: UpdateCandidateDto) {
    await this.findOne(id);
    return this.prisma.candidate.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.candidate.delete({ where: { id } });
  }

  getStats() {
    return this.prisma.candidate.groupBy({
      by: ['status'],
      _count: { status: true },
    });
  }
}
