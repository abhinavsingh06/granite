import React, { Component } from "react";
import { fetchApi } from "../../utils/API";
import Routes from "../../js-routes.js.erb";

class New extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      task: {
        description: "",
        assignee_id: "1",
        errors: null,
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    fetchApi({
      url: Routes.tasks_path(),
      method: "POST",
      body: {
        task: this.state.task,
      },
      onError: (response) => {
        console.error(response);
      },
      onSuccess: (response) => {
        console.log(response);
      },
      successCallBack: (response) => {
        window.location.href = Routes.tasks_path(response.id);
      },
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      task: {
        ...this.state.task,
        [name]: value,
      },
    });
  };

  render() {
    const { users } = this.props;
    return (
      <div className="container">
        <div className="col-md-10 mx-auto pt-2">
          <div className="row">
            <h3 className="pb-3"> Add Task </h3>{" "}
          </div>{" "}
          <form onSubmit={this.onSubmit}>
            <div className="form-group row pt-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                <h5 className="text-secondary "> Description: </h5>{" "}
              </label>{" "}
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  name="description"
                  value={this.state.description}
                  required
                />
              </div>{" "}
            </div>{" "}
            <div className="form-group row pt-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                <h5 className="text-secondary "> Assigned to: </h5>{" "}
              </label>{" "}
              <div className="col-sm-10">
                <select
                  className="custom-select"
                  name="assignee_id"
                  id="users"
                  onChange={this.handleChange}
                >
                  {users &&
                    users.map((user) => (
                      <option value={user.id} key={user.id}>
                        {" "}
                        {user.name}{" "}
                      </option>
                    ))}{" "}
                </select>{" "}
              </div>{" "}
            </div>{" "}
            <div className="form-group row pt float-right pr-3">
              <button className="btn btn-md btn-primary" type="submit">
                Submit{" "}
              </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default New;
