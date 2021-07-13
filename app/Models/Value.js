export default class Snack {

    /**
     * 
     * @param {string} name 
     * @param {string} imgUrl 
     * @param {number} price
     * @param {number} stock 
     */
    constructor(name, imgUrl, price) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.price = price;
        this.stock = 0
    }

}

