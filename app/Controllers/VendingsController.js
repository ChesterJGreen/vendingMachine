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
  let money = ProxyState.totalMoney
  document.getElementById('money').innerText = `${money}`

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
}
