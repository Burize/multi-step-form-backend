import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './interface';

@Injectable()
export class CountryService {
  constructor(@InjectModel('Country') private readonly countryModel: Model<Country>) { }

  async findAll(): Promise<Country[]> {
    return await this.countryModel.find().exec();
  }
}
