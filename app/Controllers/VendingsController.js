import { ProxyState } from "../AppState.js";
import Snack from "../Models/Value.js";
import { vendingsService } from "../Services/VendingsService.js";


//Private
// function _draw() {
//   let values = ProxyState.values;
//   let template = ''
//   values.forEach(v => template += v.Template)
//   document.getElementById("app").innerHTML = /*html*/`
//   <button className="btn btn-info" onclick="app.vendingsController.addValue()">Add Value</button>  
//   <div className="card-columns values">
//       ${template}
//   </div>
//   `
// }
function draw() {
  let money = ProxyState.totalMoney.toFixed(2)
  document.getElementById('money').innerText = `${money}`
  document.getElementById('snickers').innerText = `${ProxyState.snack.name}`
  document.getElementById('snickersPrice').innerText = `${ProxyState.snack.price.toFixed(2)}`

}


export default class VendingsController {
  constructor() {

    draw()
  }


  buySnack(item) {
    //console.log('buy snack from the controller')
    vendingsService.buySnack(item)
    draw()
  }

  getMoney() {
    vendingsService.getMoney()
    draw()
  }
}
