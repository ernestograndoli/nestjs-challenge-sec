import { WalletModel } from "./models";

export class WalletService {

    async getAll(): Promise<any[]> {
        return await WalletModel.findAll()
    }
}