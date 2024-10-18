import React from 'react';
import './pagesCSS/Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:vcamposjoao@gmail.com">vcamposjoao@gmail.com</a></p>
                <p><strong>Telefone:</strong> <a href="tel:+5594994040955">(61) 99404-0955</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Joaojapa" target="_blank" rel="noopener noreferrer">Joaojapa</a></p>
            </div>
        </div>
    );
};

export default Contact;
