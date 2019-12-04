import React from 'react';
import {ReviewForm} from './ReviewForm';
import {StoreRepository} from '../api';
import { ReviewList } from './ReviewList';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartService } from './CartService';
import { CartItem } from '../models/CartItem';
import {MyCart} from './MyCart';
import {CartContext} from './CartContext';
import {withRouter} from 'react-router-dom';


class ProductDetails extends React.Component {

    storeRepository = new StoreRepository();
    static contextType = CartContext;

    state = {};

    componentDidMount(){
        let productId=this.props.match.params.id;
        
        if(productId){
        this.storeRepository.getProductById(productId)
            .then(product => this.setState({product:product}));
        }
    }

    onReviewAdded(review){
        var onSaveComplete = () => {
            this.storeRepository.getProductById(this.state.product.id).then(product => this.setState({product:product}));
        };
        this.storeRepository.addReview(review, this.state.product.id).then(onSaveComplete);
    }

    onAddToCart(product){
        this.context.addToCart(new CartItem(product,1)); 
        this.props.history.push('/cart');
    }
    render(){
        if (!this.state.product) {
            return <div>Loading....</div>
        }
        return<>
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
                <div className="container p-5 bg-light">
                    <div className="d-flex">
                        <div className="mr-4">
                            <img className="product-image" src={"http://johnlawrimore.com/smu/" + this.state.product.imageName}/>
                        </div>
                        <div>
                            <h1 className="font-weight-light">{this.state.product.name}</h1>
                            <span className="badge badge-primary badge-lg">
                                {this.state.product.price}
                            </span>
                            <p className="text-muted mt-4">
                                {this.state.product.description}
                            </p>
                        </div>
                    </div>
                    
                    <button className="btn btn btn-warning float-right"
                        onClick={(e => this.onAddToCart(this.state.product))}>
                        Add to Cart
                    </button>
                                        
                </div>
                <ReviewList reviews = {this.state.product.reviews} />
                <ReviewForm onReviewAdded = {x => this.onReviewAdded(x)}/>
            </div> 
        </>    
    }
}
export default withRouter (ProductDetails);
