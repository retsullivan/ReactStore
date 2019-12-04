import React from 'react';
//this is a function

export const ReviewList = props => <>
    <div className="mt-3">
        <div className="d-flex">
            <h4>Product Reviews</h4>
            <h4 className="ml-2 text-muted">{
               props.reviews ? props.reviews.length : 0  //  if(props.reviews) then find the length
            }</h4>
        </div>
        {
        props.reviews.length == 0 && //this is a shortcut for an if statement
        <div className="mb-4 p-3 bg-light text-muted">
            Be the first to add a review!
        </div>
        }
        {
            props.reviews && props.reviews.map(review => <div className="card mb-3 bg-light">
                <div className="card-header">
                    { review.rating }
                </div >
                <div className="card-body">
                    <div>
                        <div className="d-flex justify-content-between mb-2 text-muted">
                            <div>{review.userName}</div>
                            <div>{review.date}</div>
                        </div>
                        <div>{review.comment}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
</>