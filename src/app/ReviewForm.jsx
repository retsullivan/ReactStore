import React from 'react';
import {ProductReview} from "../models";
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from './rating';

export class ReviewForm extends React.Component{

    state = {
        userName:"",
        rating:"",
        comment:""
        //date:"" removed because I'm declaring a new one when sending to the api
    };

    render(){
        return<>
            <div className="card">
                <div className="cardHeader">
                    <h6 className="display-6"> Add Review </h6>
                </div>            
                <div className="card-body">
                    <form>
                    <div className="d-flex">
                        <div className="form-group user-name-container">
                        <label for="userName">Your Name</label>                
                        <input type="text"
                        id="name"
                        name="name"
                        className="form-control" 
                        value={this.state.userName}
                        onChange={e =>this.setState({userName:e.target.value})}/>                   
                    </div>

                        <div className="form-group ml-4">
                        <label for="rating">Rating</label>
                        <div className="d-flex">
                            <select className="form-control ratings-container" 
                            name="rating"
                            onChange={e =>this.setState({rating:e.target.value})}>>
                            <option value="-1"></option>
                            <option value="1">1 star</option>
                            <option value="2">2 stars</option>
                            <option value="3">3 stars</option>
                            <option value="4">4 stars</option>
                            <option value="5">5 stars</option>
                            </select>
                            &nbsp;
                            <Rating rating={this.state.rating}/>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="review">Comment</label>
                        <textarea
                        className="form-control"
                        name="review"
                        id="review"
                        cols="30"
                        rows="5"
                        value={this.state.comment}
                        onChange={e =>this.setState({comment:e.target.value})}>
                        </textarea>

                    </div>
                    </form>
                    <button
                    className="btn btn-outline-info"
                    onClick={(e => this.onSubmit())}>
                        Submit
                    </button>
                </div>

            </div>
        </>
    }

    onSubmit(){
        this.props.onReviewAdded(new ProductReview(this.state.userName,this.state.rating, this.state.comment, new Date()));
        this.setState({userName:"", rating:"", comment:""});
    }

}