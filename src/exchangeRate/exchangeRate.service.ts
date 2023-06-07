import { ExchangeRateModel } from '../models/exchangeRate';
import { ExchangeRateDto } from '../dtos';
import { ok, badRequest } from '../utils/httpResponse';
import { exchangeRateModelToDto } from '../utils/mappers';
export class ExchangeRateService {
  async getAll() {
    try {
      const response: (typeof ExchangeRateModel)[] =
        await ExchangeRateModel.findAll({
          order: [['id', 'ASC']],
        });
      const data: ExchangeRateDto[] = response.map(
        (i: typeof ExchangeRateModel) => exchangeRateModelToDto(i),
      );
      return ok(data);
    } catch (e) {
      return badRequest('Error');
    }
  }
  async get(id: number) {
    try {
      const response = await ExchangeRateModel.findByPk(id);

      return ok(exchangeRateModelToDto(response.dataValues));
    } catch (e) {
      return badRequest('Error');
    }
  }
  async update(id: number, body: typeof ExchangeRateModel) {
    try {
      const response = await ExchangeRateModel.update(
        { value: body.value },
        { where: { id: id }, returning: true, plain: true },
      );
      return ok(exchangeRateModelToDto(response[1].dataValues));
    } catch (e) {
      console.log('Error updating exchange rate: ', e);
    }
  }
}
