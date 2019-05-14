import { Module } from '@nestjs/common';
import { CountryModule, DomainModule } from './modules';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CountryModule, DomainModule, MongooseModule.forRoot('mongodb://localhost/steps-form')],
})
export class AppModule { }
