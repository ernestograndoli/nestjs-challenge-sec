import { Module } from '@nestjs/common';
import { ExchangeRateController } from './exchangeRate.controller';
import { ExchangeRateService } from './exchangeRate.service';

@Module({
  imports: [],
  providers: [ExchangeRateService],
  exports: [ExchangeRateService],
  controllers: [ExchangeRateController],
})
export class ExchangeRateModule {}
