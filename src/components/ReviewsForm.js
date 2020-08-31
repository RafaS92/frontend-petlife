import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
class ReviewForm extends React.Component {
  state = {
    username: "",
    text: "",
    image: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearForm = (e) => {
    e.preventDefault();
    this.props.form(this.state);
    this.setState({
      username: "",
      text: "",
      image: "",
    });
  };

  render() {
    return (
      <Jumbotron className="Jumbotron10" fluid>
        <Container>
          <form className="card7" onSubmit={(e) => this.clearForm(e)}>
            <h3>Join To Our Comunity</h3>
            <h4>Pet's name:</h4>
            <input
              type="text"
              name="username"
              value={this.state.username}
              className="input-text"
              onChange={(e) => this.handleChange(e)}
            />

            <br />
            <br />
            <h4>Tell us what you think below:</h4>
            <textarea
              name="text"
              value={this.state.text}
              type="text"
              default="default"
              onChange={(e) => this.handleChange(e)}
              rows="3"
            />

            <br />
            <br />
            <h4>Your Dog Pic:</h4>
            <input
              type="text"
              name="image"
              placeholder="Enter a pic image URL..."
              className="input-text"
              value={this.state.image}
              onChange={(e) => this.handleChange(e)}
            />
            <br />
            <br />
            <input
              type="submit"
              name="submit"
              value="Submit"
              className="submit"
            />
          </form>
        </Container>
      </Jumbotron>
    );
  }
}

export default ReviewForm;
