import { Module } from '@nestjs/common';
import { EcfController } from './ecf.controller';
import { EcfService } from './ecf.service';

@Module({ controllers: [EcfController], providers: [EcfService] })
export class EcfModule {}
