import { Controller, Get, UseGuards } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('exams')
@UseGuards(JwtAuthGuard)
export class ExamsController {
  constructor(private examsService: ExamsService) {}

  @Get()
  getAllExams() {
    return this.examsService.findAll();
  }
}
