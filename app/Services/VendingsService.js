import { ProxyState } from "../AppState.js";


class VendingsService {

  buySnack(item) {
    if (ProxyState.totalMoney >= ProxyState.snack.price) {
      ProxyState.totalMoney -= ProxyState.snack.price
    }

  }
  getMoney() {
    ProxyState.totalMoney += ProxyState.addMoney



  }
}

export const vendingsService = new VendingsService();

