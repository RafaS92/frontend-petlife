import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";

export function Login(props) {
  let [user, changeUser] = useState({
    username: "",
    password: "",
  });
  let [new_user, changeNewUser] = useState({
    new_username: "",
    new_password: "",
    new_address: "",
    new_email: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch(
      "https://pet-life-deploy2020.herokuapp.com/login",
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      }
    );
    let { success, id } = await response.json();
    if (success) {
      localStorage.id = id;
      // localStorage.username = username;
      props.history.push("/home", id);
    } else {
      alert("incorrect");
    }
  }
  async function handleCreate(e) {
    e.preventDefault();
    let response = await fetch(
      "https://pet-life-deploy2020.herokuapp.com/users",
      {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: new_user.new_username,
          password: new_user.new_password,
          address: new_user.new_address,
          email: new_user.new_email,
        }),
      }
    );
    let { success, id } = await response.json();
    if (success) {
      props.history.push("/home", id);
    } else {
      alert("taken username");
    }
  }
  return (
    <div>
      <Jumbotron className="Jumbotron-card2">
        <div class="jumbotron jumbotron-fluid">
          <div className="presentation">
            <i class="fas fa-paw fa-3x"></i>
            <h1>WELCOME TO PET LIFE HOTEL</h1>
            <h3>Please Log in or Sign up</h3>
          </div>

          <div class="container">
            <div className="row row-cols-2 row-cols-md-3">
              <form
                onSubmit={handleSubmit}
                className="auth-wrapper auth-inner card8 col"
              >
                <h1 className="presentation">Log in</h1>
                <br />
                <div class="form-group">
                  <label for="exampleInputEmail1">Username </label>
                  <input
                    className="ml-1"
                    type="text"
                    value={user.username}
                    onChange={(e) =>
                      changeUser({ ...user, username: e.target.value })
                    }
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password </label>
                  <input
                    className="ml-1"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                      changeUser({ ...user, password: e.target.value })
                    }
                    placeholder="Password"
                  />
                </div>
                <button input="submit" class="btn btn-primary">
                  Log in
                </button>
              </form>

              <form
                onSubmit={handleCreate}
                className="auth-wrapper auth-inner row-cols-1 card8 col"
              >
                <h1 className="presentation">Sign Up</h1>
                <br />
                <div class="form-group">
                  <label for="exampleInputEmail1">Username </label>
                  <input
                    className="ml-1"
                    type="text"
                    value={new_user.new_username}
                    onChange={(e) =>
                      changeNewUser({
                        ...new_user,
                        new_username: e.target.value,
                      })
                    }
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password </label>
                  <input
                    className="ml-1"
                    type="password"
                    value={new_user.new_password}
                    onChange={(e) =>
                      changeNewUser({
                        ...new_user,
                        new_password: e.target.value,
                      })
                    }
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Address</label>
                  <input
                    className="ml-1"
                    type="text"
                    value={new_user.new_address}
                    onChange={(e) =>
                      changeNewUser({
                        ...new_user,
                        new_address: e.target.value,
                      })
                    }
                    placeholder="Address"
                  />
                </div>
                <div class="form-group ml-3">
                  <label for="exampleInputPassword1">Email </label>
                  <input
                    className="ml-1"
                    type="text"
                    value={new_user.new_email}
                    onChange={(e) =>
                      changeNewUser({
                        ...new_user,
                        new_email: e.target.value,
                      })
                    }
                    placeholder="Email"
                  />
                </div>
                <button input="submit" class="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}
