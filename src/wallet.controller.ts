import { Controller, Get, } from '@nestjs/common';
import {
    ApiOkResponse,
    ApiTags,
    ApiQuery,
} from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import { WalletDto } from './dtos';


@ApiTags('wallets')
@Controller('wallets')
export class WalletController {
    constructor(private readonly walletService: WalletService) { }

    @ApiOkResponse({ description: 'Wallet information', type: WalletDto })
    @Get('/')
    async getAll(): Promise<WalletDto[]> {
        const wallet = await this.walletService.getAll()

        return wallet.map(i => ({ id: i.id, name: i.name }));
    }

}
