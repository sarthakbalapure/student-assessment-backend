import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { ProgressService } from '../progress/progress.service';

@Injectable()
export class AttemptsService {
  constructor(
    private prisma: PrismaService,
    private progressService: ProgressService,
  ) {}

  async submitAttempt(data: {
    userId: string;
    assessmentId: string;
    score: number;
    accuracy: number;
  }) {
    const attempt = await this.prisma.attempt.create({
      data,
    });

    const assessment = await this.prisma.assessment.findUnique({
      where: { id: data.assessmentId },
      include: { exam: true },
    });

    if (assessment && data.score >= assessment.passPercentage) {
      await this.progressService.updateProgress(
        data.userId,
        assessment.examId,
        assessment.level,
      );
    }

    return attempt;
  }

  // 👇 THIS METHOD MUST BE OUTSIDE submitAttempt
  getUserHistory(userId: string) {
    return this.prisma.attempt.findMany({
      where: { userId },
      include: {
        assessment: {
          include: {
            exam: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
