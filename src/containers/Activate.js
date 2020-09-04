import React, { Component } from "react";
import { activate } from "../api/auth";
import { toast } from "react-toastify";

class Activate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }
  async componentDidMount() {
    const { token } = this.props.match.params;
    const { history } = this.props;
    try {
      if (await activate(token)) {
        toast.success(`account successfully activated`);
        history.push("/login");
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  render() {
    const { error } = this.state;
    console.log(error);
    return (
      <section className="info">
        <div className={error ? "" : "loader"}>{error}</div>
      </section>
    );
  }
}
export default Activate;
