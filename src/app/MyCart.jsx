import React from 'react';
import { Link} from 'react-router-dom';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartContext} from  './CartContext';

export class MyCart extends React.Component {

    static contextType = CartContext;
    state = {cart:this.context.getCart()};

    render(){
        return<>
            <div className="m-3">
            <div className = "top">
                <li className="breadcrumb-item active">
                    <h2 className='display-3'>
                        <Link to="/products/">Store </Link>
                    </h2>  
                </li>
            </div>
            <nav>
                <ol className="breadcrumb">
                        <h4 className='display-5'>Tasty Snacks</h4>           
                </ol>
            </nav>
                <table className="table table-condensed table-striped">
                    <thead>
                        <tr>
                            <th>Qty</th>
                            <th>Product</th>
                            <th className="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.cart &&   //makes sure that there are items in the cart?
                        this.state.cart.items.map(item=>
                        <tr>
                            <td>{item.quantity}</td>
                            <td>{item.product.name} <span className="text-muted">{item.product.price} each</span></td>
                            <td className="text-right">{item.totalPrice} total </td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4" className="text-right">
                                <b>
                                    {this.state.cart.total}
                                </b>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    }
}
