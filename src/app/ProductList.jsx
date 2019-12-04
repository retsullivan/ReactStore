import React from 'react';
import {StoreRepository} from '../api';
import { CartItem} from '../models/CartItem';
import {Product} from '../models/Product';
import {CartContext} from "./CartContext";
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class ProductList extends React.Component {

    static contextType = CartContext;
    storeRepository = new StoreRepository();
    
    state = {
        products:[{Product}]
    };

    componentDidMount(){ 
        this.storeRepository.getProducts()
            .then(products => this.setState({products:products}));
    }

    onAddToCart(product){
        this.context.addToCart(new CartItem(product,1)); 
        this.props.history.push('/cart');
    }
    
    render(){
        return <>
        <div>
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
            <div className="row">
                {
                    this.state.products &&  //makes sure that there are products
                    this.state.products.map(product=>
                    <div className="col-4"key={product.id} >
                        <div className="card text-center">
                        <div className="card-body">
                                <div>
                                <img  className="card-img-top" src={"http://johnlawrimore.com/smu/" + product.imageName} alt={product.name} />
                                {/* style="max-height: 200px; max-width: 150px;" */}
                                    <span className="badge badge-pill badge-success" >
                                        {/* style="position: absolute, top: 140px;" */}
                                        {product.price}
                                    </span>
                                </div>
                                <h5 >
                                {/* style="min-height: 48px" */}
                                    {product.name}
                                </h5>
                                {/* <Link to={'/products/'+ product.id}> 
                                        <button className='btn btn-info btn-block'>  Product Details</button>
                                </Link> */}
                                {/* <a href={'/products/'+ product.id} className="btn btn-info btn-block">
                                    Product Details
                                </a> */}
                                <Link to={'/products/'+ product.id} className="btn btn-info btn-block">
                                    Product Details 
                                </Link>  
                                <button className="btn btn-block btn-warning"
                                    onClick={(e => this.onAddToCart(product))}>
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    
                    </div>
                    )}
            </div>
        </div>
    </>
    }
}
export default withRouter(ProductList);