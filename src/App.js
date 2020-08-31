import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import ServicesList from "./components/ServicesList";
import Location from "./components/Location";
import Booking from "./components/Booking";
import Comunity from "./components/Comunity";
import ReviewList from "./components/ReviewList";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App-color container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/services" component={ServicesList} />
            <Route exact path="/locations" component={Location} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/comunity" component={Comunity} />
            <Route exact path="/r" component={ReviewList} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
