import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import { WalletModel } from '../models/wallet';
import { WalletDto } from '../dtos';

@ApiTags('Wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiOkResponse({
    description: 'Wallet information',
    type: WalletDto,
  })
  @Get('/')
  async getAll(): Promise<WalletDto[]> {
    const wallet = await this.walletService.getAll();

    return wallet.map((i) => ({
      id: i.id,
      privatekey: i.privatekey,
      address: i.address,
    }));
  }

  @ApiOkResponse({
    description: 'Wallet created successfully',
    type: WalletDto,
  })
  @Get('create')
  createWallet(): typeof WalletModel {
    return this.walletService.generateWallet();
  }
}
