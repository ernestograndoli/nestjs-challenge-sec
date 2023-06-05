import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletModule, WalletController, WalletService } from './wallet/index';
import {
  ExchangeRateModule,
  ExchangeRateController,
  ExchangeRateService,
} from './exchangeRate/index';

@Module({
  imports: [WalletModule, ExchangeRateModule],
  controllers: [WalletController, ExchangeRateController],
  providers: [WalletService, ExchangeRateService],
})
export class AppModule {}
