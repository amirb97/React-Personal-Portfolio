import React, { useState } from "react";

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'Email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
            setErrorMessage('Your email is invalid.');
        } else {
            setErrorMessage('');
        }
        } else {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
        }
    };

    return (
      <section className="text-center my-5">
        <h1 data-testid="h1tag" className="border-bottom border-dark m-3 p-3">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="m-3">
                <label htmlFor="name">Name:</label>
                <input type="text" name="Name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className="m-3">
                <label htmlFor="email">Email address:</label>
                <input type="email" name="Email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="m-3">
                <label htmlFor="message">Message:</label>
                <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button data-testid="button" type="submit" className="btn btn-outline-dark">Submit</button>
        </form>
      </section>
    );
}

export default Contact;
