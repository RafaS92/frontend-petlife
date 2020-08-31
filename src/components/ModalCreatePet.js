import React, { useState } from "react";
import Modal from "react-modal";
import { Jumbotron, Container, Button, Form, Row, Col } from "react-bootstrap";
import { Notification } from "rsuite";
import Paragraph from "./Paragraph";

Modal.setAppElement("#root");
window.Notification = Notification;
export default function ModalCreatePet(props) {
  const [pet, setPet] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  let open = () => {
    Notification.open({
      title: "Registered!",
      description: <Paragraph width={320} rows={3} />,
    });
  };

  const handleSubmit = (e) => {
    open();
    e.preventDefault();

    let id = parseInt(localStorage.id);

    console.log(pet);
    // console.log(parseInt(localStorage.id));
    // localStorage.clear() //to logout

    fetch("http://:3000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        name: pet.name,
        pet_type: pet.pet_type,
        breed: pet.breed,
        size: pet.size,
      }),
    })
      .then((resp) => resp.json())
      .then((newPet) => {
        setPet({
          pet: { ...pet, newPet },
        });
        props.setNewPet(newPet);
      });
  };

  let clearForm = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setPet({
      name: "",
      pet_type: "",
      breed: "",
      size: "",
    });
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)} className="btn btn-primary">
        Register
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="sizemodal2"
      >
        <Jumbotron className="JumbotronF" fluid>
          <Container>
            <div className="row row-cols-2 row-cols-md-2">
              <div className="col mb-2 ">
                <img
                  src="https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2018/05/gettyimages-963167968.jpg?w=1024&h=0&crop=1"
                  className="img-form3"
                  alt=""
                />
              </div>
              <div className="col mb-2 card4">
                <div className="container">
                  <Row>
                    <h1>Register Your Pet</h1>
                    <Col sm={8}>
                      <Form onSubmit={(e) => clearForm(e)}>
                        <Form.Group controlId="PetName">
                          <Form.Label>Pet Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            required
                            placeholder="ex.Churro"
                            value={pet.name}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="PetType">
                          <Form.Label>Pet Type</Form.Label>
                          <Form.Control
                            as="select"
                            name="pet_type"
                            required
                            value={pet.pet_type}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          >
                            <option>Dog</option>
                            <option>Cat</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="PetBreed">
                          <Form.Label>Breed</Form.Label>
                          <Form.Control
                            type="text"
                            name="breed"
                            required
                            value={pet.breed}
                            onChange={(e) => {
                              handleChange(e);
                            }}
                          ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Size</Form.Label>
                          <Form.Control
                            controlId="PetSize"
                            name="size"
                            required
                            as="select"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            value={pet.size}
                          >
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group>
                          <Button variant="primary" type="submit">
                            Register
                          </Button>

                          <Button
                            variant="danger ml-4"
                            onClick={() => setModalIsOpen(false)}
                          >
                            Close
                          </Button>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </div>
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
