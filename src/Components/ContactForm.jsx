import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Icon } from '@iconify-icon/react';


function ContactForm() {
    const [state, handleSubmit] = useForm(import.meta.env.VITE_CONTACT_FORM);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [clientErrors, setClientErrors] = useState({});

    if (state.succeeded) {
        return <p>Thanks for contacting us!</p>;
    }

    const validate = () => {
        const errors = {};

        if (!formData.name.trim()) errors.name = "Name is required.";
        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid email address.";
        }
        if (!formData.subject.trim()) errors.subject = "Subject is required.";
        if (!formData.message.trim()) errors.message = "Message is required.";

        return errors;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validate();

        if (Object.keys(errors).length > 0) {
            setClientErrors(errors);
        } else {
            setClientErrors({});
            handleSubmit(e);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            
            <h3>Send me a message</h3>

            <form onSubmit={onSubmit}>
                <div className="field-group equal-col">
                    <div className="field">
                        <label htmlFor="name">Enter Name</label>
                        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
                        {clientErrors.name && <p className="error">{clientErrors.name}</p>}
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>

                    <div className="field">
                        <label htmlFor="email">Enter Email Address</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                        {clientErrors.email && <p className="error">{clientErrors.email}</p>}
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="subject">Enter Subject</label>
                    <input id="subject" type="text" name="subject" value={formData.subject} onChange={handleChange} />
                    {clientErrors.subject && <p className="error">{clientErrors.subject}</p>}
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div className="field">
                    <label htmlFor="message">Enter Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
                    {clientErrors.message && <p className="error">{clientErrors.message}</p>}
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button type="submit" className='btn-primary w-100' disabled={state.submitting}>Submit <Icon icon="tabler:arrow-right" width="24" height="24"  style={{color: "#fff"}} /></button>
            </form>
        </>
    );

}

export default ContactForm;
