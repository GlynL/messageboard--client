import React from "react";
import "../../styles/form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="btn">{this.props.buttonText}</button>
      </form>
    );
  }
}

Form.defaultProps = {
  buttonText: "Submit"
};

export default Form;
