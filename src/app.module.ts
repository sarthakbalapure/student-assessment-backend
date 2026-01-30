import { Module } from '@nestjs/common';

import { PrismaModule } from './common/prisma.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExamsModule } from './exams/exams.module';
import { AssessmentsModule } from './assessments/assessments.module';
import { AttemptsModule } from './attempts/attempts.module';
import { ProgressModule } from './progress/progress.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    ExamsModule,
    AssessmentsModule,
    AttemptsModule,
    ProgressModule,
    DashboardModule,
    AdminModule,
  ],
})
export class AppModule {}
