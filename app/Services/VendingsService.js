import { ProxyState } from "../AppState.js";


class VendingsService {

  buySnack(item) {
    if (ProxyState.totalMoney >= ProxyState.snack.price) {
      ProxyState.totalMoney -= ProxyState.snack.price
    }

  }
}

export const vendingsService = new VendingsService();

