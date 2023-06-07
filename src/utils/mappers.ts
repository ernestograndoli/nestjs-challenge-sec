import { WalletModel } from '../models/wallet';
import { ExchangeRateModel } from '../models/exchangeRate';
import { WalletDto, ExchangeRateDto } from '../dtos';

export const walletModelToDto = (model: typeof WalletModel): WalletDto => ({
  id: model.id,
  address: model.address,
  favourite: model.favourite,
});

export const exchangeRateModelToDto = (
  model: typeof ExchangeRateModel,
): ExchangeRateDto => ({
  id: model.id,
  currency: model.currency,
  rate: model.rate,
});
