export class CartItem{

    constructor(product,quantity){
        this.product=product;
        this.quantity=quantity;
    }

    get totalPrice(){
        let tPrice = this.product.price*this.quantity;
        return tPrice;
    }

}