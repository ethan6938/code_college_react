import React, { Component } from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';
//layout for each product (contained in a card)-- FORMATS PRODUCT
class Product extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.data.imageUrl} />
                    <Card.Body>
                        {/* product name */}
                        <h5>{this.props.data.productName}</h5>

                        {/* releasedDate */}
                        {this.props.data.releasedDate}

                        {/* rating and no. of reviews*/}
                        <Rating
                            rating={this.props.data.rating}
                            numOfReviews={this.props.data.numOfReviews}
                        />

                        {/* description */}
                        <p>{this.props.data.description}</p>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Product;