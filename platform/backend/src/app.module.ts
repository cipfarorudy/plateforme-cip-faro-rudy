import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { CandidatesModule } from './modules/candidates/candidates.module';
import { PlacementTestsModule } from './modules/placement-tests/placement-tests.module';
import { PrerequisitesModule } from './modules/prerequisites/prerequisites.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { FormationsModule } from './modules/formations/formations.module';
import { CompetencyBlocksModule } from './modules/competency-blocks/competency-blocks.module';
import { EcfModule } from './modules/ecf/ecf.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { CertificatesModule } from './modules/certificates/certificates.module';
import { SurveysModule } from './modules/surveys/surveys.module';
import { QualiopiModule } from './modules/qualiopi/qualiopi.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    CandidatesModule,
    PlacementTestsModule,
    PrerequisitesModule,
    ContractsModule,
    FormationsModule,
    CompetencyBlocksModule,
    EcfModule,
    AttendanceModule,
    CertificatesModule,
    SurveysModule,
    QualiopiModule,
  ],
})
export class AppModule {}
