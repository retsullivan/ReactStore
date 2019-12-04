import React from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// export class Rating extends React.Component{

export const Rating = props => <>
        <span className="stars">
        {
            [1,2,3,4,5].map((value, index) => 
            {
                return <i className={((value > props.rating) ? 'empty-star' : 'full-star')}></i>
            })
        }
        </span>
</>

 
// Usage
// Depicts a rating value in the form of stars (1-5)
// Occurrences
// ReviewList (header of each review)
// ReviewForm (to show the rating selected by the user)

// State - None
// Props  -value
