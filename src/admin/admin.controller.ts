import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { ExamsService } from '../exams/exams.service';

@Controller('admin')
@UseGuards(JwtAuthGuard)
export class AdminController {
  constructor(private examsService: ExamsService) {}

  @Post('exam')
  @UseGuards(new RolesGuard('ADMIN'))
  createExam(@Body() body: any) {
    return this.examsService.create(body);
  }
}
