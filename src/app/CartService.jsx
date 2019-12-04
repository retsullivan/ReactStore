import { Cart } from "../models/Cart";
import React from 'react';


export class CartService extends React.Component {

    cart = new Cart();

    getCart(){
        return this.cart; 
    }

    addToCart(cartItem){
        let added = false;
        this.cart.items.map( (item, index) => { 
            if(cartItem.product.id === item.product.id){
                this.cart.items[index].quantity += 1;
                added = true;
            }    
        });   
        if (!added) this.cart.items.push(cartItem);
    }
}
