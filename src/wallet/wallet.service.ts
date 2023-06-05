import { WalletModel } from '../models/wallet';
import { Injectable } from '@nestjs/common';
import { ethers, HDNodeWallet } from 'ethers';

@Injectable()
export class WalletService {
  async getAll(): Promise<(typeof WalletModel)[]> {
    return await WalletModel.findAll();
  }

  async create(wallet: HDNodeWallet): Promise<typeof WalletModel> {
    try {
      return await WalletModel.create({
        privatekey: wallet.privateKey,
        address: wallet.address,
      });
    } catch (e) {
      console.log('error: ', e);
    }
  }

  generateWallet(): typeof WalletModel {
    const wallet = ethers.Wallet.createRandom();
    const response = this.create(wallet);

    return response;
  }
}
