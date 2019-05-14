import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CountryController } from './controller';
import { CountryService } from './service';
import { CountrySchema } from './schemas';
import { countryProviders } from './model';
import { DatabaseModule } from '../database/entry';

@Module({
  imports: [DatabaseModule, MongooseModule.forFeature([{ name: 'Country', schema: CountrySchema }])],
  controllers: [CountryController],
  providers: [...countryProviders, CountryService],
})
export class CountryModule { }
