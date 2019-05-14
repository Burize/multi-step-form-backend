
import { Controller, Get } from '@nestjs/common';
import { CountryService } from './service';
import { Country } from './interface';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) { }

  @Get()
  async findAll(): Promise<Country[]> {
    return this.countryService.findAll();
  }
}
