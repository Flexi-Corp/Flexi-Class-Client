"use client";
import React, { useState } from 'react';
import './Cookies.css';

const CookieNotice: React.FC = () => {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('cookieAccepted', 'true');
  };

  const handleReject = () => {
    setAccepted(false);
    localStorage.setItem('cookieAccepted', 'false');
  };

  if (accepted !== null) {
    return null;
  }

  return (
    <div className="cookie-notice">
      <p>This website uses cookies. By continuing to use this site, you can either accept or reject the use of cookies.</p>
      <button className='accept' onClick={handleAccept}>Accept</button>
      <button className='reject' onClick={handleReject}>Reject</button>
    </div>
  );
};

export default CookieNotice;