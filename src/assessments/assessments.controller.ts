import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AssessmentsService } from './assessments.service';

@Controller('assessments')
@UseGuards(JwtAuthGuard)
export class AssessmentsController {
  constructor(private assessmentsService: AssessmentsService) {}

  @Get(':examId')
  getAssessments(@Param('examId') examId: string) {
    return this.assessmentsService.getByExam(examId);
  }
}
