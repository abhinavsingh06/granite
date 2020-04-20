import React, { Component } from "react";
import { fetchApi } from "../../utils/API";
import Errors from "../shared/Errors";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.task.description,
      errors: null,
    };
    this.handleError = this.handleError.bind(this);
  }

  handleError(response) {
    this.setState({
      errors: {
        errors: response.messages,
        type: response.type,
      },
    });
  }

  handleChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetchApi({
      url: Routes.task_path(this.props.task.id),
      method: "PATCH",
      body: { description: this.state.description },
      onError: this.handleError,
      onSuccess: (response) => {
        console.log(response);
      },
      successCallBack: () => {
        window.location.replace(Routes.tasks_path());
      },
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h3 className="py-3">Enter new task details</h3>
          <div className="row">
            {errors && (
              <div className="mt-4">
                <Errors errors={errors.errors} message={errors.type} />
              </div>
            )}
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Description : </label>
            </div>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                required
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          <button
            className="btn btn-md btn-primary"
            type="submit"
            onClick={this.handleSubmit}
          >
            Update task
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Edit;
