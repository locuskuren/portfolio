import { useState } from 'react';
import validator from 'email-validator';
import axios from 'axios';
import SectionTitle from '../SectionTitle/SectionTitle';

import './Connect.scss';

const Connect = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = name && validator.validate(email) && message;

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendMessage = async () => {
      setLoading(true);
      try {
        await axios.post('https://api.web3forms.com/submit', {
          access_key: '4ff57e70-d6a8-4c31-bb4a-8db4227789df',
          subject: 'New Submission from Web3Forms',
          email,
          name,
          message,
        });
        setName('');
        setEmail('');
        setMessage('');
        setLoading(false);
      } catch (e) {
        new alert(e.message);
        setLoading(false);
      }
    };

    sendMessage();
  };

  return (
    <section id="connect">
      <SectionTitle
        span="Connect"
        h2="Interested in working with me
  or perhaps just talk?"
        dashWidth="4rem"
      />
      <p>
        You can reach me on social media or by filling out the contact form
        below or by sending an email to{' '}
        <a href="mailto:zuravlovsandris@gmail.com">zuravlovsandris@gmail.com</a>
      </p>
      <form onSubmit={handleSubmit}>
        <label>What's your name?</label>
        <input
          type="text"
          className="textinput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Your email address</label>
        <input
          type="email"
          className="textinput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Type your message here</label>
        <textarea
          className="textinput"
          onChange={(e) => setMessage(e.target.value)}
          cols="30"
          rows="7"
          value={message}
        ></textarea>
        <button disabled={!validate || loading} onClick={handleSubmit}>
          Send message
        </button>
      </form>
    </section>
  );
};

export default Connect;
