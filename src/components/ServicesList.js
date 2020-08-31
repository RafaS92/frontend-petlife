import React from "react";
import { Jumbotron } from "react-bootstrap";
import ModalBasic from "./ModalBasic";
import ModalSilver from "./ModalSilver";
import ModalGold from "./ModalGold";
import ModalPlatinum from "./ModalPlatinum";
import NavBar from "./NavBar";

export default class ServiceList extends React.Component {
  openModal = (e) => {
    e.preventDefault();
    this.modal.open();
  };

  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron className="Jumbotron-card2">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Are you ready for the best experience?</h1>
              <p class="lead">
                While we know you’d love to stay home and play with your dog all
                day, that’s not always possible. That’s why we offer dog
                daycare. Our daytime guests enjoy playtime with other dogs in a
                safe and fun environment. Fresh, clean water is always available
                for staying hydrated, and our staff is always present to reward
                good manners. You can conveniently add professional dog training
                or spa/grooming services while your pet is with us, too. With
                our dog day care services, your dog will be safe, engaged, and
                loved all day long!
              </p>
            </div>
          </div>
        </Jumbotron>
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
      </div>
    );
  }
}
