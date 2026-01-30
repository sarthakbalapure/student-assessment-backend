import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AttemptsService } from './attempts.service';
import { Get } from '@nestjs/common';

@Controller('attempts')
@UseGuards(JwtAuthGuard)
export class AttemptsController {
  constructor(private attemptsService: AttemptsService) {}

  @Post()
  submit(@Req() req: any, @Body() body: any) {
    return this.attemptsService.submitAttempt({
      userId: req.user.userId,
      assessmentId: body.assessmentId,
      score: body.score,
      accuracy: body.accuracy,
    });
  }

  @Get('history')
  getHistory(@Req() req: any) {
    return this.attemptsService.getUserHistory(req.user.userId);
  }
}
