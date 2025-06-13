/* Add to the end of your CSS or merge with existing styles */

/* Contact Links Modern Styling */
.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.7em;
  padding: 0.9em 1.8em;
  border-radius: 32px;
  background: linear-gradient(90deg, #007cf0 0%, #00dfd8 100%);
  color: white;
  font-size: 1.09em;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0,0,0,0.09);
  transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
  border: none;
}

.contact-link i {
  font-size: 1.28em;
}

.contact-link:hover,
.contact-link:focus {
  transform: scale(1.09);
  box-shadow: 0 6px 18px rgba(0,0,0,0.13);
  background: linear-gradient(90deg, #00b4d8 0%, #007cf0 100%);
  outline: none;
}

/* Responsive */
@media (max-width: 600px) {
  .contact-links {
    flex-direction: column;
    gap: 0.7em;
  }
  .contact-link {
    justify-content: center;
    width: 100%;
    font-size: 1.05em;
  }
}

/* Animated Typing Banner */
.typing-banner {
  display: inline-block;
  font-size: 1.2rem;
  letter-spacing: 0.01em;
  min-height: 2.2em;
}
#typing-banner {
  color: #fffbe9;
  font-weight: 600;
}
#typing-cursor {
  color: #facc15;
  animation: blink-cursor 1.1s steps(1) infinite;
}
@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.1; }
}
