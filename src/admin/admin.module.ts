import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ExamsModule } from '../exams/exams.module';

@Module({
  imports: [ExamsModule], // ✅ IMPORTANT
  controllers: [AdminController],
})
export class AdminModule {}
