import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiResponse({
    status: 404,
    description: 'Exchange rates information bad request',
  })
  @Get('/')
  async getAll() {
    return await this.exchangeRateService.getAll();
  }

  @ApiOkResponse({
    description: 'Exchange rates information by ID',
    type: ExchangeRateDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Exchange rates information by ID bad request',
  })
  @Get('/:id')
  async get(@Param('id') id: number) {
    const exchangeRate = await this.exchangeRateService.get(id);

    return exchangeRate;
  }

  @ApiOkResponse({
    description: 'Exchange rates updated successfully',
    type: ExchangeRateDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Exchange rates updated bad request',
  })
  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: ExchangeRateDto) {
    const exchangeRate = await this.exchangeRateService.update(id, body);
    console.log('exchangeRate: ', exchangeRate);
    return exchangeRate;
  }
}
