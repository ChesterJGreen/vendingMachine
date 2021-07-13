import Snack from "./Models/Value.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  values = []
  totalMoney = 2
  addMoney = 0.05
  snack = new Snack('Snickers', 'https://marschocolate.com/static/snickers-original-single-e10d6bae103d9da3c6bf853a120ffcd8.png', 1.50,)

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
