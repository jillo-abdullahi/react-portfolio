import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faThumbsUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { firebase, db } from '../config/firebaseConfig';

class ContactForm extends Component {
    initialState = {
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        loading: false
    }

    state = { ...this.initialState }

    notify = (message) => toast(
        <div>
            <div className="toast-message">
                <span> { message } <FontAwesomeIcon icon={faThumbsUp}/></span>
        </div>
        </div>,
    {
        className: 'black-background',
        bodyClassName: "toast-body",
        progressClassName: 'toast-progress-bar'
    });

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const sendMail = firebase.functions().httpsCallable('sendMail');
        sendMail({details: this.state}).then((res) => {
            // Send contact details to firestore database
            this.setState({
                loading: true
            });
            this.notify("Your message has been sent.");
            db.collection('my-contacts').add({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                message: this.state.message,
                email: this.state.email
            });
            this.setState({...this.initialState});
            }).catch(err => {
                this.notify("There was an error sending your message.")
            })
    }

    render(){
        return (
        <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="input-field col s6">
                    <input name="first_name" type="text" onChange={this.handleChange} value={this.state.first_name}required/>
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input name="last_name" type="text"  onChange={this.handleChange} value={this.state.last_name}required/>
                    <label htmlFor="last_name">Last Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input name="email" type="email"  onChange={this.handleChange} value={this.state.email}required/>
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea name="message" className="materialize-textarea"  onChange={this.handleChange} value={this.state.message}required></textarea>
                    <label htmlFor="message">Message</label>
                </div>
            </div>
            <div className="row">
                <button className="btn waves-effect waves-light" type="submit">Submit&nbsp;
                    {this.state.loading ? (<FontAwesomeIcon icon={faSpinner} spin/>) : (<FontAwesomeIcon icon={faPaperPlane}/>)}
                </button>
            </div>
            <ToastContainer className='toast-container' toastClassName="dark-toast" />
    </form>
    )
    }
}

export default ContactForm;
