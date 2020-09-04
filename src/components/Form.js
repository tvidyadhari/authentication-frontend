import React, { Component } from "react";
import { validate } from "../utils/formHelper";

class Form extends Component {
  constructor(props) {
    super(props);
    this.fields = props.fields.reduce(
      (acc, field) => ({ ...acc, [field.name]: { value: "", error: "" } }),
      {}
    );
    this.state = {
      ...this.fields,
      buttonText: props.buttonText,
      submit: props.submit,
      loading: false,
      serverError: "",
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlur(event) {
    const { name } = event.target;
    const error =
      name === "confirmPassword"
        ? validate(event.target, "confirm password", this.state.password.value)
        : validate(event.target);
    this.setState((prevState) => ({ [name]: { ...prevState[name], error } }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: { ...prevState[name], value: value.trim() },
    }));
  }

  async handleSubmit(event) {
    console.log("his", this.props.history);
    event.preventDefault();
    if (
      Object.keys(this.fields).some((name) => {
        const { value, error } = this.state[name];
        return error || !value;
      })
    )
      return;
    const values = Object.keys(this.fields).reduce(
      (acc, name) => ({
        ...acc,
        [name]: this.state[name].value,
      }),
      {}
    );
    this.setState({ loading: true });
    try {
      await this.state.submit({ ...values, ...this.props });
    } catch (err) {
      this.setState({ loading: false, serverError: err.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { buttonText } = this.state;
    return (
      <form
        autoComplete="off"
        noValidate
        onSubmit={this.handleSubmit}
        className="card myform"
      >
        <p className="form-title">{this.props.formLabel}</p>

        <span className="error help is-danger serverError">
          {this.state.serverError}
        </span>
        {this.props.fields.map((field) => {
          const { name, type, placeholder } = field;
          return (
            <div className="field" key={name}>
              <div className="control has-icons-left">
                {/* <label htmlFor={name}>{label}</label> */}
                <input
                  className={`input ${
                    this.state[name].error ? "is-danger" : ""
                  }`}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  required
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
                <span className="icon is-small is-left">
                  <i className={`fa fa-lock`}></i>
                </span>
              </div>
              <span className="error help is-danger">
                {this.state[name].error}
              </span>
            </div>
          );
        })}
        <button
          className={`button is-primary ${
            this.state.loading ? "is-loading" : ""
          }`}
          type="submit"
          disabled={this.state.loading ? "disabled" : ""}
        >
          {buttonText}
        </button>
      </form>
    );
  }
}

export default Form;
