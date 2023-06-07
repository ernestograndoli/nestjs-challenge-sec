import axios from 'axios';
import { convertWeiToCurrency } from 'src/utils/covertWeiToCurrency';
import { WalletModel } from '../models/wallet';
import { WaleltUpdateDto, WalletDto } from '../dtos';
import { ok, badRequest } from '../utils/httpResponse';
import { walletModelToDto } from '../utils/mappers';
export class WalletService {
  async getAll(orderBy?: typeof WalletModel, order?: string) {
    try {
      const response: (typeof WalletModel)[] = await WalletModel.findAll({
        order: [
          [
            `${
              orderBy && orderBy.toLowerCase() === 'favourite'
                ? orderBy.toLowerCase()
                : 'id'
            }`,
            `${
              order && order.toUpperCase().includes('ASC' || 'DESC')
                ? order.toUpperCase()
                : 'DESC'
            }`,
          ],
        ],
      });
      const data: WalletDto[] = response.map((i: typeof WalletModel) =>
        walletModelToDto(i),
      );
      return ok(data);
    } catch (e) {
      return badRequest('Error');
    }
  }

  async create(body: typeof WalletModel) {
    try {
      const response = walletModelToDto(
        await WalletModel.create({
          address: body.address,
          privatekey: null,
          favourite: body.favourite,
        }),
      );
      return ok(response);
    } catch (e) {
      switch (e.name) {
        case 'SequelizeUniqueConstraintError':
          return badRequest('UniqueKey');
        default:
          return badRequest('Error');
      }
    }
  }

  async update(address: string, body: WaleltUpdateDto) {
    try {
      const response = await WalletModel.update(
        { favourite: body.favourite },
        { where: { address: address }, returning: true, plain: true },
      );
      return ok(walletModelToDto(response[1].dataValues));
    } catch (e) {
      return badRequest('Error');
    }
  }

  async getAccountBalanceInCurrency(
    address: string,
    rate: number,
  ): Promise<any> {
    try {
      const response = await axios.get('https://api.etherscan.io/api', {
        params: {
          module: 'account',
          action: 'balance',
          address,
          tag: 'latest',
          apikey: process.env.ETHERSCAN_API_KEY,
        },
      });
      return ok(convertWeiToCurrency(response.data.result, rate));
    } catch (error) {
      return badRequest('Error');
    }
  }
}
