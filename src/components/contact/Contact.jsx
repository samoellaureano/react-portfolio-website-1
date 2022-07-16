import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wjndaz7', 'template_jrq6bon', form.current, 'DrM15vOrTuAUuCfoz')
        
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>email@email.com</h5>
                        <a href="mailto:email@email.com" target="_blank">Send a messege</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>usermessenger</h5>
                        <a href="https://web.facebook.com" target="_blank">Send a messege</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>+55 (99) 99999-9999 </h5>
                        <a href="https://api.whatsapp.com/send?phone=5599999999999&text=Oi" target="_blank">Send a messege</a>
                    </article>
                </div>

                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                    <button type="submit" className="btn btn-primary">Send Messege</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;