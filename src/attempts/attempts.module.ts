import { Module } from '@nestjs/common';
import { AttemptsService } from './attempts.service';
import { AttemptsController } from './attempts.controller';
import { ProgressModule } from '../progress/progress.module';

@Module({
  imports: [ProgressModule], // ✅ IMPORTANT
  providers: [AttemptsService],
  controllers: [AttemptsController],
})
export class AttemptsModule {}
