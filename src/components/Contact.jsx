import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc';
import style from './styles/contact.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { target } = e;

    try {
      await emailjs.sendForm(
        'service_57i5icy',
        'template_n9fjqe7',
        target,
        'vM42l9I5NAfsr4M0d',
      );
      setSuccessMessage('Your message has been sent!');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      setErrorMessage('Oops! Something went wrong. Please try again later.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit} ref={formRef}>
        <motion.h1 variants={textVariant()} className={style.title}>
          Get in Touch!
        </motion.h1>
        <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
          It will be a pleasure to hear from you! If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I&apos;d love to help with it.
        </motion.p>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className={style.container}>
          <div className={style.form}>
            <h4 className={style.form_title}>Contact Me</h4>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className={style.input}
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              className={style.input}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your message"
              maxLength="500"
              name="message"
              className={`${style.input} ${style.textarea}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className={style.btn_container}
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SectionWrapper(ContactForm, 'contact', 'my-0');
