import { Module } from '@nestjs/common';
import { CompetencyBlocksController } from './competency-blocks.controller';
import { CompetencyBlocksService } from './competency-blocks.service';

@Module({ controllers: [CompetencyBlocksController], providers: [CompetencyBlocksService] })
export class CompetencyBlocksModule {}
