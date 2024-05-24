import React, { useState } from 'react';

const EnquiryForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Mobile:', mobile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnquiryForm;
