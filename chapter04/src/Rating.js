import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: this.props.rating };
    }

    handleClick(ratingValue) {
        this.setState({ rating: ratingValue })
    }
    
    render() {
        return (
            <div style={styles.starStyle}>
                <h1>Rating: {this.state.rating}</h1>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                        {this.state.rating >= star && (
                            <IoIosStar onClick={() => this.handleClick(star)} />
                        )}
                        {this.state.rating < star && (
                            <IoIosStarOutline onClick={() => this.handleClick(star)} />
                        )}
                    </span>
                ))}
            </div>
        );
    }
}

export default Rating;

const styles = {
    starStyle: {
        color: "orange"
    }
};
