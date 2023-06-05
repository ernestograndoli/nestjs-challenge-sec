import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ExchangeRateService } from './exchangeRate.service';
import { ExchangeRateDto } from '../dtos';

@ApiTags('exchangeRate')
@Controller('exchangeRate')
export class ExchangeRateController {
  constructor(private readonly exchangeRateService: ExchangeRateService) {}

  @ApiOkResponse({
    description: 'Exchange rates information',
    type: ExchangeRateDto,
  })
  @Get('/')
  async getAll(): Promise<ExchangeRateDto[]> {
    const exchangeRate = await this.exchangeRateService.getAll();

    return exchangeRate.map((i) => ({
      id: i.id,
      currency: i.currency,
      value: i.value,
    }));
  }

  @ApiOkResponse({
    description: 'Exchange rates information by ID ',
    type: ExchangeRateDto,
  })
  @Get('/:id')
  async get(@Param('id') id: number): Promise<ExchangeRateDto[]> {
    const exchangeRate = await this.exchangeRateService.get(id);

    return exchangeRate;
  }

  @ApiOkResponse({
    description: 'Exchange rates updated successfully',
    type: ExchangeRateDto,
  })
  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: ExchangeRateDto) {
    const exchangeRate = await this.exchangeRateService.update(id, body);

    return exchangeRate;
  }
}
