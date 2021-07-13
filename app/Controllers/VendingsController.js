import { ProxyState } from "../AppState.js";
import { vendingsService } from "../Services/VendingsService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <button className="btn btn-info" onclick="app.vendingsController.addValue()">Add Value</button>  
  <div className="card-columns values">
      ${template}
  </div>
  `
}



export default class VendingsController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    vendingsService.addValue()
  }
  buySnack()
}
