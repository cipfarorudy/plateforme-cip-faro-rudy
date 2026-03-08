import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCertificateDto } from './certificates.dto';

@Injectable()
export class CertificatesService {
  constructor(private prisma: PrismaService) {}

  findAll(candidateId?: string) {
    return this.prisma.certificate.findMany({
      where: candidateId ? { candidateId } : undefined,
      include: { candidate: true },
      orderBy: { issuedAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const c = await this.prisma.certificate.findUnique({ where: { id }, include: { candidate: true } });
    if (!c) throw new NotFoundException(`Attestation ${id} introuvable`);
    return c;
  }

  create(dto: CreateCertificateDto) {
    const { validUntil, ...rest } = dto;
    return this.prisma.certificate.create({
      data: { ...rest, validUntil: validUntil ? new Date(validUntil) : undefined },
      include: { candidate: true },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.certificate.delete({ where: { id } });
  }
}
