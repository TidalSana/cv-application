import React, { Component } from "react";
import uniqid from "uniqid";
import "../css/general.css";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        id: uniqid(),
        name: "",
        email: "",
        phone: "",
        address: "",
      },
      info: [],
    };
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [id]: value,
        id: this.state.personal.id,
      },
    }));
  };

  render() {
    const { personal } = this.state;

    return (
      <form className="info general-info">
        <div className="name general">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Name"
            id="name"
            className="inputs"
            value={personal.name}
          />
          <input
            onChange={this.handleChange}
            type="email"
            placeholder="email"
            id="email"
            className="inputs"
            value={personal.email}
          />
          <input
            onChange={this.handleChange}
            type="tel"
            placeholder="phone"
            id="phone"
            className="inputs"
            value={personal.last}
          />
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="address"
            id="address"
            className="inputs"
            value={personal.address}
          />
        </div>
      </form>
    );
  }
}

export default General;
