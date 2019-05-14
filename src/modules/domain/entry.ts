import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DomainController } from './controller';
import { DomainService } from './service';
import { DomainSchema } from './schemas';
import { domainProviders } from './model';
import { DatabaseModule } from '../database/entry';

@Module({
  imports: [DatabaseModule, MongooseModule.forFeature([{ name: 'Domain', schema: DomainSchema }])],
  controllers: [DomainController],
  providers: [...domainProviders, DomainService],
})
export class DomainModule { }
