import React from "react";
import Routes from "../../js-routes.js.erb";

class Navbarin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Granite </a>{" "}
          <a className="navbar-brand" href={Routes.login_path()}>
            Login{" "}
          </a>{" "}
        </nav>{" "}
      </div>
    );
  }
}

export default Navbarin;
