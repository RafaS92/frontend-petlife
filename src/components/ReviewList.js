import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewList = (props) => {
  return (
    <div className="cards-container">
      {props.reviews.map((review) => (
        <ReviewCard className="flex-card" review={review} key={review.id} />
      ))}
    </div>
  );
};

export default ReviewList;
