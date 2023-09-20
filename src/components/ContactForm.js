import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import M from "materialize-css";
import emailjs from "emailjs-com";
import { IconSend } from "@tabler/icons-react";

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
    this.setState({
      loading: true,
    });

    // I know this is bad practice but keeping it here for now.
    //TODO: move domain to vercel so we can store these in the environment
    emailjs
      .send(
        "service_6aqh4bj",
        "template_w1b9obl",
        this.state,
        "user_asn4biZeLW7gkYQlbZLk9"
      )
      .then(
        (response) => {
          this.notify("success");
          this.setState({ ...this.initialState });
        },
        (error) => {
          this.notify("failed");
          this.setState({ ...this.initialState });
        }
      );
  };

  render() {
    return (
      <div className="contact-me-form">
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
          <div className="submit-btn-section row flex justify-center items-center">
            <button
              className="relative items-center gap-x-1.5 rounded-md px-4 py-2 font-semibold focus:z-10 bg-orange/90 capitalize text-blue focus:bg-orange flex text-lg"
              type="submit"
              disabled={this.state.loading}
            >
              <span>Send</span>
              {this.state.loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <IconSend className="h-4 w-4 text-yellow" aria-hidden="true" />
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
