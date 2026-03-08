import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateContractDto, UpdateContractDto } from './contracts.dto';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  findAll(candidateId?: string) {
    return this.prisma.contract.findMany({
      where: candidateId ? { candidateId } : undefined,
      include: { candidate: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const c = await this.prisma.contract.findUnique({ where: { id }, include: { candidate: true } });
    if (!c) throw new NotFoundException(`Contrat ${id} introuvable`);
    return c;
  }

  create(dto: CreateContractDto) {
    const { startDate, endDate, ...rest } = dto;
    return this.prisma.contract.create({
      data: {
        ...rest,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
      },
      include: { candidate: true },
    });
  }

  async update(id: string, dto: UpdateContractDto) {
    await this.findOne(id);
    const { startDate, endDate, signedAt, ...rest } = dto;
    return this.prisma.contract.update({
      where: { id },
      data: {
        ...rest,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        signedAt: signedAt ? new Date(signedAt) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.contract.delete({ where: { id } });
  }
}
