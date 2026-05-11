import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    niche: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
NEW CLIENT ENQUIRY

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Ad Budget: ${formData.budget}
Niche: ${formData.niche}
    `;

    const whatsappURL = `https://wa.me/919492479080?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section">

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        WANT US TO BE ON YOUR SIDE?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Fill this form and let us give you a call.
      </motion.p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="NAME"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="PHONE NUMBER"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="budget"
          placeholder="AD BUDGET PER MONTH"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="niche"
          placeholder="NICHE"
          onChange={handleChange}
          required
        />

        <button type="submit">
          SPEAK TO US
        </button>

      </form>

      <div className="contact-details">
        <p>workwithlateef@gmail.com</p>
        <p>+91 9492479080</p>
      </div>

    </section>
  );
}