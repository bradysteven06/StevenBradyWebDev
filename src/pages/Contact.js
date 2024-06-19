import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
