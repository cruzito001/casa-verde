import React, { useState } from "react";
import { Send } from "lucide-react";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""}`}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        <Send size={20} />
      </button>
      {isSubmitted && (
        <div className={styles.successMessage}>
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
