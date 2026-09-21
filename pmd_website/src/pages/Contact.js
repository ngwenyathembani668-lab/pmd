import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
    FaWhatsapp,
    FaMapMarkerAlt,
    FaClock,
    FaPhoneAlt,
    FaArrowRight,
    FaTimes,
    FaCheckCircle,
    FaPaperclip,
} from "react-icons/fa";
import "./Contact.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    const location = useLocation();

    const passedService =
        location.state?.selectedService || location.state?.service || "";

    const services = [
        "Photo Copying & Printing",
        "Lamination",
        "Business Cards",
        "Digital & ID Photo Printing",
        "Car Branding",
        "Photoshoot",
        "T-Shirt & Clothing Printing",
        "Online Applications (NSFAS/University)",
        "CV & Resume Creation",
        "Flyers & Banners",
    ];

    const initialFormState = {
        fullName: "",
        email: "",
        phone: "",
        service: services.includes(passedService) ? passedService : "",
        file: null,
        message: "",
    };

    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;


        setFormData((current) => ({
            ...current,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((current) => ({
                ...current,
                [name]: "",
            }));
        }


    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0] || null;


        setFormData((current) => ({
            ...current,
            file,
        }));

        if (errors.file) {
            setErrors((current) => ({
                ...current,
                file: "",
            }));
        }


    };

    const validateForm = () => {
        const newErrors = {};


        const trimmedName = formData.fullName.trim();
        const trimmedEmail = formData.email.trim();
        const trimmedPhone = formData.phone.trim();

        if (!trimmedName) {
            newErrors.fullName = "Please enter your full name.";
        }

        if (!trimmedEmail) {
            newErrors.email = "Please enter your email address.";
        } else if (
            !trimmedEmail.includes("@") ||
            !trimmedEmail.includes(".")
        ) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!trimmedPhone) {
            newErrors.phone = "Please enter your phone number.";
        }

        if (!formData.service) {
            newErrors.service = "Please select a service.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please enter a message.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;


    };

    const handleSubmit = (event) => {
        event.preventDefault();


        if (!validateForm()) {
            return;
        }

        const name = formData.fullName.trim();
        const service = formData.service;

        setSuccessMessage(
            `Thank you ${name}! Your inquiry for ${service} has been received. PMD will contact you shortly.`
        );

        setShowSuccess(true);
        setFormData({
            fullName: "",
            email: "",
            phone: "",
            service: "",
            file: null,
            message: "",
        });

        event.target.reset();


    };

    // const handleWhatsAppClick = (event) => {
    //     event.preventDefault();


    //     console.log("PMD WhatsApp Chat Opened");

    //     alert("Opening PMD WhatsApp chat...");


    // };

    const handleCloseSuccess = (event) => {
        event.preventDefault();
        setShowSuccess(false);
        setSuccessMessage("");
    };

    return (<main className="contact-page">

        <Header />

        <section className="contact-hero"> <div className="contact-hero-container"> <span className="contact-eyebrow">
            PMD • Get In Touch </span>


            <h1 className="contact-title">
                Let's Get Your
                <span> Project Started.</span>
            </h1>

            <p className="contact-intro">
                Need printing, branding, digital support, or help with
                an online application? Send us your enquiry and the PMD
                team will get back to you.
            </p>
        </div>
        </section>

        <section className="contact-content">
            <div className="contact-container">
                <div className="contact-layout">
                    <div className="contact-information">
                        <div className="contact-information-header">
                            <span style={{ color: '#0369a1' }} className="contact-section-eyebrow">
                                Contact PMD
                            </span>

                            <h2>
                                We're Here To
                                <span> Help.</span>
                            </h2>

                            <p>
                                Visit us, give us a call, or start a WhatsApp chat.
                                Whether you have a quick question or a larger
                                project, we're ready to assist.
                            </p>
                        </div>

                        <div className="contact-details">
                            <div className="contact-detail-card">
                                <div className="contact-detail-icon">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <span className="contact-detail-label">
                                        Physical Address
                                    </span>

                                    <p>
                                        28 Kruin Street, Klopperpark
                                        <br />
                                        Klopperpark shops (shop no.5)
                                    </p>
                                </div>
                            </div>

                            <div className="contact-detail-card">
                                <div className="contact-detail-icon">
                                    <FaClock />
                                </div>

                                <div>
                                    <span className="contact-detail-label">
                                        Working Hours
                                    </span>

                                    <p>
                                        Monday – Friday: 08:00 – 18:00
                                        <br />
                                        Saturday: 08:00 – 14:00
                                        <br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>

                            <div className="contact-detail-card">
                                <div className="contact-detail-icon">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <span className="contact-detail-label">
                                        Phone Number
                                    </span>

                                    <p>+27 62 434 7357</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/27624347357?text=Hello%20PMD%2C%20I%20would%20like%20to%20make%20an%20enquiry."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-button"
                        >
                            <span className="whatsapp-icon">
                                <FaWhatsapp />
                            </span>

                            <span className="whatsapp-content">
                                <small>Need a quick answer?</small>
                                <strong>Chat With Us On WhatsApp</strong>
                            </span>

                            <FaArrowRight className="whatsapp-arrow" />
                        </a>
                    </div>

                    <div className="contact-form-wrapper">
                        <div className="contact-form-header">
                            <span style={{ color: '#0369a1' }} className="contact-section-eyebrow">
                                Send An Enquiry
                            </span>

                            <h2>
                                Tell Us What
                                <span> You Need.</span>
                            </h2>

                            <p>
                                Complete the form below and provide as much detail
                                as possible so we can assist you efficiently.
                            </p>
                        </div>

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="fullName">
                                        Full Name
                                    </label>

                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        autoComplete="name"
                                        aria-invalid={Boolean(errors.fullName)}
                                    />

                                    {errors.fullName && (
                                        <span className="form-error">
                                            {errors.fullName}
                                        </span>
                                    )}
                                </div>

                                <div className="form-field">
                                    <label htmlFor="email">
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        aria-invalid={Boolean(errors.email)}
                                    />

                                    {errors.email && (
                                        <span className="form-error">
                                            {errors.email}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="phone">
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        autoComplete="tel"
                                        aria-invalid={Boolean(errors.phone)}
                                    />

                                    {errors.phone && (
                                        <span className="form-error">
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>

                                <div className="form-field">
                                    <label htmlFor="service">
                                        Service Selected
                                    </label>

                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        aria-invalid={Boolean(errors.service)}
                                    >
                                        <option value="">
                                            Select a service
                                        </option>

                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>

                                    {errors.service && (
                                        <span className="form-error">
                                            {errors.service}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="file">
                                    File Attachment
                                    <span> Optional</span>
                                </label>

                                <div className="file-input-wrapper">
                                    <FaPaperclip />

                                    <input
                                        id="file"
                                        name="file"
                                        type="file"
                                        onChange={handleFileChange}
                                        accept="image/*,.pdf,.doc,.docx"
                                    />

                                    <span className="file-input-text">
                                        {formData.file
                                            ? formData.file.name
                                            : "Attach a print design or document"}
                                    </span>
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="message">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about what you need..."
                                    rows="6"
                                    aria-invalid={Boolean(errors.message)}
                                />

                                {errors.message && (
                                    <span className="form-error">
                                        {errors.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="contact-submit-button"
                            >
                                <span>Submit Inquiry</span>
                                <FaArrowRight />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {showSuccess && (
            <div
                className="success-modal-overlay"
                role="dialog"
                aria-modal="true"
                aria-labelledby="success-modal-title"
            >
                <div className="success-modal">
                    <button
                        type="button"
                        className="success-modal-close"
                        onClick={handleCloseSuccess}
                        aria-label="Close success message"
                    >
                        <FaTimes />
                    </button>

                    <div className="success-icon">
                        <FaCheckCircle />
                    </div>

                    <h2 id="success-modal-title">
                        Inquiry Received
                    </h2>

                    <p>{successMessage}</p>

                    <button
                        type="button"
                        className="success-modal-button"
                        onClick={handleCloseSuccess}
                    >
                        Done
                    </button>
                </div>
            </div>
        )}

        <Footer />

    </main>


    );
};

export default Contact;
