import React from "react";
// import Jumbotron from "./Jumbotron";
import { Jumbotron, Carousel, Container } from "react-bootstrap";
import ModalBasic from "./ModalBasic";
import ModalSilver from "./ModalSilver";
import ModalGold from "./ModalGold";
import ModalPlatinum from "./ModalPlatinum";
import NavBar from "./NavBar";

class Home extends React.Component {
  state = {
    current_user_id: this.props.location.state,
    user: {},
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="banner">
          <video autoPlay muted loop>
            <source src="/videos/cutDogs.mp4" type="video/mp4" />
          </video>
          <h2>PET LIFE</h2>
        </div>

        <Jumbotron className="Jumbotron4" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-1">
              <div className="col separator mb-2 ">
                <i className="fas fa-paw fa-3x"></i>
                <h1>WELCOME TO PET LIFE HOTEL</h1>
                <br />
                <h3>
                  COME AND LET YOUR PET EXPERIENCE OUR 5 STAR LUXURY PET HOTEL
                  FACILITY, CUSTOM DESIGNED TO MEET THE UNIQUE NEEDS OF YOUR
                  PET.
                </h3>
                <br />
                <h5>ALL SUITES START AT $50 PER NIGHT.</h5>
                <p className="text4">
                  PET LIFE is committed to delivering the highest level of pet
                  pampering, grooming, and training for both dogs and cats. From
                  socialization to one-on-one interaction, luxury suites to Zen
                  Wellness, PET LIFE will surpass your expectations. All pets
                  that enter to our facility are treated as if they are our own,
                  allowing you to have peace of mind while you are away from
                  your pet.
                </p>
              </div>
            </div>
          </Container>
        </Jumbotron>

        <Jumbotron className="Jumbotron3" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 card3">
                <h1 className="title">New Client Special!</h1>
                <h3 className="subtitle">
                  GET YOUR FIRST DAY OF DAYCARE FREE!{" "}
                </h3>

                <p>Call to schedule your pet's temperament test today.</p>
              </div>
              <div className="col mb-2 ">
                <h1 className="title3">Call to Booking!</h1>
                <h4>Don't miss the chance to spoil your pet!</h4>
              </div>
            </div>
          </Container>
        </Jumbotron>
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item">
            <img
              src="https://images.squarespace-cdn.com/content/v1/52daf520e4b01225621eb96c/1414036015923-OD1YNNIEIV0EXBXC2ZAI/ke17ZwdGBToddI8pDm48kF4R7C2Ceumo-q5k85DJq3QUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhIF-NJg88BZ6Wqtv6nxpEMXnJz_NFjor9WvMXhNZMZam4bjm9DAHF2kOsIZRJKXnA/final_front2.jpg?format=1500w"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              src="https://www.prague-stay.com/images/full_image/1920x1200/prague%20vip%20pets%20main-resize~vip-pets-5-star-pet-hotel-school.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src="/images/slide3.jpg" alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img src="/images/slide1.jpg" alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Jumbotron className="Jumbotron-card">
          <h1 className="display-4">Services</h1>
          <div className="row row-cols-1 row-cols-md-4">
            <div className="col mb-2">
              <div className="card">
                <div className="inner">
                  <img
                    src="/images/card1.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Basic</h4>
                  <p className="card-text">
                    Check the details of our basic package.
                  </p>
                </div>

                <div className="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalBasic
                    ref={(node) => {
                      this.modal = node;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div className="card">
                <div className="inner">
                  <img
                    src="/images/card2.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Silver</h4>
                  <p className="card-text">
                    {" "}
                    Our silver package is one of the most love package of our
                    customers.
                  </p>
                </div>

                <div className="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalSilver
                    ref={(node) => {
                      this.modal = node;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div className="card">
                <div className="inner">
                  <img
                    src="/images/card3.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Gold</h4>
                  <p className="card-text">
                    Do you want to treat your pet? The gold package is for you.
                  </p>
                </div>

                <div className="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalGold
                    ref={(node) => {
                      this.modal = node;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div className="card">
                <div className="inner">
                  <img
                    src="/images/card4.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Platinum</h4>
                  <p className="card-text">
                    {" "}
                    Your pet deserve threat like a king? We have the perfect
                    option for you.
                  </p>
                </div>

                <div className="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalPlatinum
                    ref={(node) => {
                      this.modal = node;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="Jumbotron4" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 ">
                <img
                  src="https://www.thearkspa.com/images/content/img_9193-g626xx.jpg"
                  className="img-jumbotron2"
                  alt=""
                />
              </div>
              <div className="col mb-2 ">
                <p className="text4">
                  If you'll be traveling in the near future, now is a good time
                  to start thinking about how you'll make sure your pets are
                  taken care of while you're away. One of the most common
                  choices pet owners make is that of boarding their pets at our
                  facilities in Houston while they're gone. This way, they can
                  rest assured that their pets are fed, played with, and taken
                  care of daily.
                </p>
              </div>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
