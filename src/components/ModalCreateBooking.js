import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Jumbotron, Container, Button, Form, Row, Col } from "react-bootstrap";
import { Notification } from "rsuite";
import Paragraph2 from "./Paragraph2";

Modal.setAppElement("#root");

export default function ModalCreatebooking(props) {
  const [booking, setBooking] = useState("");
  const [pets, setPets] = useState([]);
  // const [fee, setFee] = useState(0);
  const [numberD, setNumberD] = useState(0);
  const [service, setService] = useState(0);

  useEffect(() => {
    fetch("https://pet-life-deploy2020.herokuapp.com/pets")
      .then(function (response) {
        return response.json();
      })
      .then((petsArray) => {
        setPets(petsArray);
      });
  }, [props.newPet]);

  let id = parseInt(localStorage.id);
  let filteredPets = pets.filter((pet) => pet.user_id === id);
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  let open = () => {
    Notification.open({
      title: "You all set!",
      description: <Paragraph2 width={320} rows={3} className="paragraph" />,
    });
  };

  const handleChangeService = (e) => {
    if (e.target.value === "Silver") {
      setService(70);
    } else if (e.target.value === "Basic") {
      setService(60);
    } else if (e.target.value === "Gold") {
      setService(80);
    } else if (e.target.value === "Platinum") {
      setService(99.99);
    }
  };

  const handleSubmit = (e) => {
    open();
    e.preventDefault();

    let id = parseInt(localStorage.id);

    // console.log(parseInt(localStorage.id));
    // localStorage.clear() //to logout

    fetch("https://pet-life-deploy2020.herokuapp.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        pet_id: booking.pet_id,
        services: booking.services,
        fee: booking.fee,
        location: booking.location,
        number_days: booking.number_days,
        arrival: booking.arrival,
      }),
    })
      .then((resp) => resp.json())
      .then((newbooking) => {
        setBooking({
          booking: { ...booking, newbooking },
        });
      });
  };

  let clearForm = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setBooking({
      pet_id: "",
      services: "",
      fee: "",
      location: "",
      number_days: "",
      arrival: "",
    });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  let fee = numberD * service;
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
        Register
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="sizemodal3"
      >
        <Jumbotron className="JumbotronF" fluid>
          <Container fluid>
            <Form onSubmit={(e) => clearForm(e)}>
              <Row>
                <Col className="card6">
                  <h1>Make a Booking</h1>
                  <Form.Group>
                    <Form.Label>Pet name</Form.Label>

                    <Form.Control
                      as="select"
                      name="pet_id"
                      required
                      value={booking.pet_id}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      {filteredPets.map((pet) => (
                        <option>{pet.name}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="bookingType">
                    <Form.Label>Services</Form.Label>
                    <Form.Control
                      as="select"
                      name="services"
                      required
                      value={booking.services}
                      onChange={(e) => {
                        handleChangeService(e);
                      }}
                    >
                      <option>Basic</option>
                      <option>Silver</option>
                      <option>Gold</option>
                      <option>Platinum</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      controlId="bookingSize"
                      name="location"
                      value={booking.location}
                      required
                      as="select"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    >
                      <option>Downtown</option>
                      <option>Sugar Land</option>
                      <option>The Heigths</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="bookingBreed">
                    <Form.Label>Check in</Form.Label>
                    <Form.Control
                      type="date"
                      name="arrival"
                      required
                      value={booking.arrival}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="bookingBreed">
                    <Form.Label>Confirm number of days</Form.Label>
                    <Form.Control
                      type="text"
                      name="number_days"
                      required
                      value={booking.number_days}
                      onChange={(e) => {
                        setNumberD(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <h3>Fee</h3>
                    <Form.Label>
                      <h5>${fee}</h5>
                    </Form.Label>
                    <Form.Control
                      name="fee"
                      value={booking.fee}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      type="hidden"
                    />
                  </Form.Group>
                  <Form.Group className="button-form">
                    <Button variant="primary " type="submit">
                      Register
                    </Button>

                    <Button
                      variant="danger ml-4"
                      onClick={() => setModalIsOpen(false)}
                    >
                      Close
                    </Button>
                  </Form.Group>
                </Col>

                <Col>
                  <img
                    src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2019/07/22160617/dog-hotel-article.jpg"
                    className="img-form"
                    alt=""
                  />
                </Col>
              </Row>
            </Form>
          </Container>
        </Jumbotron>
      </Modal>
    </div>
  );
}
