import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getStudentDashboard(userId: string) {
    const totalAttempts = await this.prisma.attempt.count({
      where: { userId },
    });

    const recentAttempts = await this.prisma.attempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        assessment: {
          include: {
            exam: true,
          },
        },
      },
    });

    const progress = await this.prisma.progress.findMany({
      where: { userId },
      include: {
        exam: true,
      },
    });

    return {
      totalAttempts,
      recentAttempts,
      progress,
    };
  }
}
