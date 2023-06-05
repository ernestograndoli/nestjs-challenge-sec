import { ExchangeRateModel } from '../models/exchangeRate';
import { Injectable } from '@nestjs/common';
import { ethers, HDNodeWallet } from 'ethers';

export class ExchangeRateService {
  async getAll(): Promise<(typeof ExchangeRateModel)[]> {
    return await ExchangeRateModel.findAll();
  }
  async get(id: number): Promise<(typeof ExchangeRateModel)[]> {
    return await ExchangeRateModel.findByPk(id);
  }
  async update(
    id: number,
    body: typeof ExchangeRateModel,
  ): Promise<(typeof ExchangeRateModel)[]> {
    return await ExchangeRateModel.update(
      { value: body.value },
      { where: { id: id } },
    );
  }
}
