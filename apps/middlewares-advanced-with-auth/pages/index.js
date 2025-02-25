// ===============================
// 🏠 index.js (with Navbar & Geolocation)
// ===============================
import React from 'react';
import Link from 'next/link';

const Index = () => {
  // Function to navigate based on geolocation
  const handleGeolocation = () => {
    const userCountry = window.navigator.language.includes('de') ? 'DE' : 'IN';
    if (userCountry === 'IN') {
      window.location.href = '/in-homepage';
    } else if (userCountry === 'DE') {
      window.location.href = '/de-homepage';
    } else {
      window.location.href = '/home';
    }
  };

  return (
    <div>
      <h1>Welcome to the Next.js Middleware App!</h1>
      <nav>
        <Link href="/login">Go to Login Page</Link>
        <br />
        <Link href="/home">Go to Default Home Page</Link>
        <br />
        <button onClick={handleGeolocation}>Go to Geolocation Home Page</button>
      </nav>
    </div>
  );
};

export default Index;