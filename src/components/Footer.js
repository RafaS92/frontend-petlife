import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="Jumbotron-bottom">
          <div className="row row-cols-2 row-cols-md-3">
            <div className="col mb-2 ">
              <br />
              <br />
              <br />

              <h2>FOLLOW US</h2>
              <i className="fab fa-facebook ml-4 fa-3x"></i>
              <i className="fab fa-instagram ml-4 fa-3x"></i>
            </div>
            <div className="col mb-2 ">
              <div>
                <h2>CONTACT US</h2>
                <p>
                  Phone: (832) 920-0685
                  <br />
                  Fax: (281) 403-7701
                  <br />
                  Email: bestservice@petlife.com
                  <br />
                  Pet Life <br />
                </p>
                <h2>HOURS OF OPERATION</h2>
                <p>
                  Monday – Friday: 7:00am to 6:30pm
                  <br />
                  Saturday: 9:00am to 6:00pm
                  <br />
                  Sunday: 10:00am to 6:00pm
                </p>
              </div>
            </div>
            <div className="col mb-2 ">
              <h2>LOCATIONS</h2>
              <Link to={{ pathname: "/locations" }}>
                <br />
                <img src="/images/map.jpg" className="img-map" alt="" />
              </Link>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron className="Jumbotron-bottom2">
          <div>
            <p>© 2020 Pet Life. All Rights Reserved.</p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Footer;
