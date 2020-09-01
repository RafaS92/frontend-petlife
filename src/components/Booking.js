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
              <div className="card5">
                <div className="inner">
                  <img
                    src="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2018/05/gettyimages-963167968.jpg?w=1024&h=0&crop=1"
                    className="card-img-top2"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title">Register Your Pet</h2>
                  <h5 className="card-text">
                    {" "}
                    If you do not have a Pet registered or you want to register
                    a new pet. Click here.
                  </h5>
                </div>

                <div className="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalCreatePet
                    setNewPet={this.setNewPet}
                    href={(node) => {
                      this.modal = node;
                    }}
                  />
                  Name
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div className="card5">
                <div className="inner">
                  <img
                    src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg"
                    className="card-img-top2"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <h2 className="card-title">Booking</h2>
                  <h4 className="card-text"> Book a new stay.</h4>
                </div>

                <div className="card-body">
                  <button onClick={this.openModal}></button>
                  <ModalCreateBooking
                    newPet={this.state.newPet}
                    href={(node) => {
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
