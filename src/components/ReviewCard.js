import React, { Component } from "react";

class ReviewCard extends Component {
  state = {
    text: this.props.review.text,
    user_id: this.props.review.user_id,
    username: this.props.review.username,
    image: this.props.review.image,
  };
  render() {
    return (
      <div className="container3">
        <div className="carta">
          <div className="face face1">
            <div className="content">
              <img src={this.state.image} alt="" />
              <h3>{this.state.username}</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>{this.state.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewCard;
