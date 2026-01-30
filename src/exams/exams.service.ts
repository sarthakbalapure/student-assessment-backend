import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ExamsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.exam.findMany();
  }

  create(data: { name: string; description: string }) {
    return this.prisma.exam.create({ data });
  }
}
