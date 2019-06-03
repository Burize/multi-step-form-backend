import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDomain } from './interface';

@Injectable()
export class DomainService {
  constructor(@InjectModel('Domain') private readonly domainModel: Model<IDomain>) { }

  async createDomain(domain: IDomain): Promise<{}> {
    const createdDomain = new this.domainModel({ ...domain });
    return await createdDomain.save();
  }

  async isAlreadyExist(domainName: string): Promise<boolean> {
    const domain: number = await this.domainModel.count({ domain: domainName }).exec();
    return domain !== 0;
  }
}
