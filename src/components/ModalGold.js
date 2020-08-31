import React, { useState } from "react";
import Modal from "react-modal";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");
export default function ModalGold() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
        See Details
      </button>
      <Link to="/booking">
        <button className="btn btn-warning ml-4">Book now!</button>
      </Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="sizemodal"
      >
        <Jumbotron className="JumbotronM" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 ">
                <img src="/images/card3.jpg" className="img-modal" alt="" />
              </div>
              <div className="col mb-2 card4">
                <h1>Gold</h1>
                <h4>This package includes:</h4>

                <p> -Daily outdoors activities included</p>
                <p> -Care 24/7 </p>
                <p> -Grooming</p>
                <p> -Training</p>
                <p> -Access to the Petsuit</p>
                <p> -Price: $70 per day </p>
                <Link to="/booking">
                  <button className="btn btn-success ml-4">Book now!</button>
                </Link>
                <button
                  className="btn btn-danger ml-4"
                  onClick={() => setModalIsOpen(false)}
                >
                  Go back
                </button>
              </div>
            </div>
          </Container>
        </Jumbotron>

        <div className="row row-cols-2 row-cols-md-2">
          <div className="col mb-2 "></div>
          <div className="col mb-2 "></div>
        </div>
      </Modal>
    </div>
  );
}
