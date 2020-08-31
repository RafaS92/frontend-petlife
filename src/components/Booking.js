import React from "react";
import ModalCreatePet from "./ModalCreatePet";
import ModalCreateBooking from "./ModalCreateBooking";
import { Jumbotron } from "react-bootstrap";
import NavBar from "./NavBar";

class Booking extends React.Component {
  state = { newPet: null };

  setNewPet = (pet) => {
    this.setState({
      newPet: pet,
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron fluid className="Jumbotron-title">
          <div>
            <h1 className="Jumbotron-title-mkt">
              "Your Dog Never Enjoyed So Much"
            </h1>
          </div>
        </Jumbotron>
        <Jumbotron className="Jumbotron-card">
          <div className="row row-cols-2 row-cols-md-2">
            <div className="col mb-2">
              <div class="card5">
                <div className="inner">
                  <img
                    src="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2018/05/gettyimages-963167968.jpg?w=1024&h=0&crop=1"
                    class="card-img-top2"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h2 class="card-title">Register Your Pet</h2>
                  <h5 class="card-text">
                    {" "}
                    If you do not have a Pet registered or you want to register
                    a new pet. Click here.
                  </h5>
                </div>

                <div class="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalCreatePet
                    setNewPet={this.setNewPet}
                    ref={(node) => {
                      this.modal = node;
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div class="card5">
                <div className="inner">
                  <img
                    src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg"
                    class="card-img-top2"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h2 class="card-title">Booking</h2>
                  <h4 class="card-text"> Book a new stay.</h4>
                </div>

                <div class="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalCreateBooking
                    newPet={this.state.newPet}
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

export default Booking;
