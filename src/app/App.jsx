import React from 'react';
import './App.css';
import {CartContext} from './CartContext';
import  ProductDetails  from './ProductDetails';
import  ProductList  from './ProductList';
import { MyCart } from './MyCart';
import { CartService } from './CartService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
    cartService = new CartService();

    render () {
        return<>
        <CartContext.Provider value={this.cartService}>
            <Router>
                <Switch>
                    <Route path="/products/:id" component={ProductDetails}/>       
                    <Route path="/products/" component={ProductList}/>     
                    <Route path="/cart" component={MyCart}/>
                </Switch>
            </Router>
        </CartContext.Provider> 
        </>;
    }
}