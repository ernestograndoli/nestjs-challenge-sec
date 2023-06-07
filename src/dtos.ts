import { ApiProperty } from '@nestjs/swagger';

export class WalletDto {
  @ApiProperty({ description: 'Wallet Id' })
  id: number;
  @ApiProperty({ description: 'Wallet Address - PRIMARY KEY' })
  address: string;
  @ApiProperty({ description: 'Wallet favourite - TRUE or FALSE' })
  favourite: boolean;
}

export class WaleltUpdateDto {
  @ApiProperty({ description: 'Wallet favourite - TRUE or FALSE' })
  favourite: boolean;
}

export class ExchangeRateDto {
  @ApiProperty({ description: 'Exchange Rate Id' })
  id: number;
  @ApiProperty({ description: 'Currency Name' })
  currency: string;
  @ApiProperty({ description: 'Rate value' })
  rate: number;
}
