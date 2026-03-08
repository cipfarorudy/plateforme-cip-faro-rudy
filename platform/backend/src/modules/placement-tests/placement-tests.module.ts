import { Module } from '@nestjs/common';
import { PlacementTestsController } from './placement-tests.controller';
import { PlacementTestsService } from './placement-tests.service';

@Module({
  controllers: [PlacementTestsController],
  providers: [PlacementTestsService],
})
export class PlacementTestsModule {}
