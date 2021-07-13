import { ProxyState } from "../AppState.js";


class VendingsService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
  buySnack() {
    console.log('buy snack from the services')
  }
}

export const vendingsService = new VendingsService();

