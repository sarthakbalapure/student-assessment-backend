import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class AssessmentsService {
  constructor(private prisma: PrismaService) {}

  getByExam(examId: string) {
    return this.prisma.assessment.findMany({
      where: { examId },
      orderBy: { level: 'asc' },
    });
  }
}
