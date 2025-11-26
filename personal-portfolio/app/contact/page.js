'use client'; // Code is executed on the client-side or in the user's browser

import { useState } from 'react';
import { Mail } from "@deemlol/next-icons";
import { MapPin } from "@deemlol/next-icons";

export default function ContactPage() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Helper to update state when user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload

    // Create the Subject and Body templates
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi,\n\n` +
      `You have a new message from your portfolio contact form.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open the user's email client with the data pre-filled
    window.location.href = `mailto:sivakumar.samriddhi@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'm currently open to new opportunities and collaborations.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="contact-content">
        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="your.email@example.com" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              placeholder="Hello! I'd like to talk about..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          
          <div className="info-item">
            <Mail size={24} color="cornflowerblue" />
            <p>sivakumar.samriddhi@gmail.com</p>
          </div>
          
          <div className="info-item">
            <MapPin size={24} color="cornflowerblue" />
            <p>Seattle, WA</p>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}