import React from "react";
import { fetchApi } from "../../utils/API";
import Routes from "../../js-routes.js.erb";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetchApi({
      url: Routes.users_path(),
      method: "POST",
      body: {
        user: this.state.user,
      },
      onError: (response) => {
        console.error(response);
      },
      onSuccess: (response) => {
        console.log(response);
      },
      successCallBack: () => {
        window.location.href = Routes.tasks_path();
      },
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="py-3"> Sign Up </h3>{" "}
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="name"> Name </label>{" "}
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleChange}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="email"> Email address </label>{" "}
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
              />{" "}
              <small className="form-text text-muted">
                We 'll never share your email with anyone else.{" "}
              </small>{" "}
            </div>{" "}
          </div>{" "}
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="password"> Password </label>{" "}
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="password_confirmation">
                Password Confirmation{" "}
              </label>{" "}
              <input
                type="password"
                className="form-control"
                id="password_confirmation"
                name="password_confirmation"
                onChange={this.handleChange}
              />{" "}
            </div>{" "}
          </div>{" "}
          <button type="submit" className="btn btn-primary">
            Sign Up{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default New;
