import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import M from "materialize-css";
import { firebase, db } from "../config/firebaseConfig";

class ContactForm extends Component {
  initialState = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    loading: false,
  };

  state = { ...this.initialState };

  notify = (status) => {
    let toastHTML;
    if (status === "success") {
      toastHTML = `<span style="color:#e7a11a;font-size:15px">Thanks! Your message has been sent.</span>`;
    } else {
      toastHTML = `<span style="color:#ef5350;font-size:15px">Sorry, there was an error sending your message. Please retry.</span>`;
    }

    M.toast({ html: toastHTML });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const sendMail = firebase.functions().httpsCallable("sendMail");
    sendMail({ details: this.state })
      .then((res) => {
        // Send contact details to firestore database
        this.setState({
          loading: true,
        });
        this.notify("success");
        db.collection("my-contacts").add({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          message: this.state.message,
          email: this.state.email,
        });
        this.setState({ ...this.initialState });
      })
      .catch((err) => {
        this.notify("fail");
      });
  };

  render() {
    return (
      <div className="contact-me-form">
        <div className="heading">
          <span className="secondary-heading-small">
            I would love to hear from you
          </span>
        </div>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="first_name"
                type="text"
                onChange={this.handleChange}
                value={this.state.first_name}
                required
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                name="last_name"
                type="text"
                onChange={this.handleChange}
                value={this.state.last_name}
                required
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="message"
                className="materialize-textarea"
                onChange={this.handleChange}
                value={this.state.message}
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="submit-btn-section row">
            <button className="btn waves-effect waves-light" type="submit">
              Send&nbsp;
              {this.state.loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <FontAwesomeIcon icon={faPaperPlane} />
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
