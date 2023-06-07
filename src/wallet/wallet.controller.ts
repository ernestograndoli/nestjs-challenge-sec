import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';
import { WalletDto, WaleltUpdateDto } from '../dtos';
@ApiTags('Wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiOkResponse({
    description: 'Wallet information',
    type: WalletDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Wallet information bad request',
  })
  @Get('/')
  async getAll(
    @Query('orderBy') orderBy?: string,
    @Query('order') order?: string,
  ) {
    const response = await this.walletService.getAll(orderBy, order);

    return response;
  }

  @ApiOkResponse({
    description: 'Wallet created successfully',
    type: WalletDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Wallet created bad request',
  })
  @Post('/')
  async create(@Body() body: WalletDto) {
    //const response = await this.walletService.create(body);
    return await this.walletService.create(body);
  }

  @ApiOkResponse({
    description: 'Wallet added to favourite successfully',
    type: WalletDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Wallet to favourite failed',
  })
  @Put('/:address')
  async update(
    @Param('address') address: string,
    @Body() body: WaleltUpdateDto,
  ) {
    return await this.walletService.update(address, body);
  }

  @ApiOkResponse({
    description: 'Wallet deleted successfully',
    type: WalletDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Wallet deleted failed',
  })
  @Delete('/:address')
  async delete(@Param('address') address: string) {
    return await this.walletService.delete(address);
  }

  @ApiOkResponse({
    description: 'Balance currency information',
  })
  @ApiResponse({
    status: 400,
    description: 'Balance currency bad request',
  })
  @Get(':address/balance/:rate')
  async getAccountBalanceInCurrency(
    @Param('address') address: string,
    @Param('rate') rate: number,
  ): Promise<any> {
    return this.walletService.getAccountBalanceInCurrency(address, rate);
  }

  @ApiOkResponse({
    description: 'Wallet is old.',
  })
  @ApiResponse({
    status: 400,
    description: 'Wallet is old bad request',
  })
  @Get(':address/isOldWallet')
  async isOldWallet(@Param('address') address: string): Promise<any> {
    return this.walletService.isOldWallet(address);
  }
}
