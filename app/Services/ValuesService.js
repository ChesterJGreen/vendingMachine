import { ProxyState } from "../AppState.js";


class ValuesService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}
class


export const valuesService = new ValuesService();

