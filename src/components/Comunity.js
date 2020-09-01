import React from "react";
import { Jumbotron } from "react-bootstrap";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewsForm";
import NavBar from "./NavBar";

class Comunity extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch("https://pet-life-api.herokuapp.com/reviews")
      .then((resp) => resp.json())
      .then((reviews) => {
        this.setState({
          reviews: reviews,
        });
      });
  }

  handleSubmit = (review) => {
    let id = parseInt(localStorage.id);
    fetch("https://pet-life-api.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        username: review.username,
        text: review.text,
        image: review.image,
      }),
    })
      .then((resp) => resp.json())
      .then((review) => {
        this.setState({
          reviews: [...this.state.reviews, review],
        });
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron fluid className="Jumbotron">
          <div className="row row-cols-2 row-cols-md-2">
            <div>
              <img
                className="col mb-3 img-jumbotron"
                src="https://cloudinary-res.cloudinary.com/image/upload/Pawsy.jpg"
                alt=""
              />
            </div>
            <div className="col mb-1 ">
              <div className="main-div">
                <h1 className="main-title">
                  PET LIFE
                  <span>PET LIFE </span>
                  <span>PET LIFE </span>
                  <span>The best place on earth</span>
                </h1>
              </div>
            </div>
            <div>
              <h2>Welcome To Pet Life Comunity</h2>
              <h4>
                Please checkout our reviews and feel free to leave yours!!
              </h4>
            </div>
          </div>
        </Jumbotron>

        <ReviewList reviews={this.state.reviews} />
        <ReviewForm form={this.handleSubmit} />
      </div>
    );
  }
}

export default Comunity;
