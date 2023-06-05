import { ApiProperty } from '@nestjs/swagger';

export class WalletDto {
  @ApiProperty({ description: 'Wallet Id' })
  id: number;
  @ApiProperty({ description: 'Wallet Private Key' })
  privatekey: string;
  @ApiProperty({ description: 'Wallet Address' })
  address: string;
}

export class ExchangeRateDto {
  @ApiProperty({ description: 'Exchange Rate Id' })
  id: number;
  @ApiProperty({ description: 'Currency Name' })
  currency: string;
  @ApiProperty({ description: 'Ethereum value' })
  value: number;
}
