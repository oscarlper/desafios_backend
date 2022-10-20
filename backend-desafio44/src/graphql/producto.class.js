export default class Producto {
    constructor(id, { timestamp, code, title, description, thumbnail, stock, price }) {
        this.id = id;
        this.timestamp = timestamp;
        this.code = code;
        this.title = title;
        this.thumbnail = thumbnail;
        this.stock = stock;
        this.price = price;
    }
}