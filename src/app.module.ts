import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WalletModule, WalletController, WalletService } from './wallet/index';
import {
  ExchangeRateModule,
  ExchangeRateController,
  ExchangeRateService,
} from './exchangeRate/index';

@Module({
  imports: [ConfigModule.forRoot(), WalletModule, ExchangeRateModule],
  controllers: [WalletController, ExchangeRateController],
  providers: [WalletService, ExchangeRateService],
})
export class AppModule {}
