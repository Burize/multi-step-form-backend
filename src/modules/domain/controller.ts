
import { Controller, Post, Body, Req, HttpException, HttpStatus } from '@nestjs/common';

import { DomainService } from './service';
import { IDomain } from './interface';

@Controller('domains')
export class DomainController {
  constructor(private readonly domainService: DomainService) { }

  @Post()
  async createDomain(@Body() request: IDomain): Promise<any> {
    const isAlreadyExist = await this.domainService.isAlreadyExist(request.domain);
    if (isAlreadyExist) {
      throw new HttpException('domain_already_exists', HttpStatus.CONFLICT);
    }
    this.domainService.createDomain(request);
  }
}
