import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async updateProgress(userId: string, examId: string, passedLevel: number) {
    return this.prisma.progress.upsert({
      where: {
        userId_examId: {
          userId,
          examId,
        },
      },
      update: {
        level: passedLevel + 1,
      },
      create: {
        userId,
        examId,
        level: passedLevel + 1,
      },
    });
  }
}
