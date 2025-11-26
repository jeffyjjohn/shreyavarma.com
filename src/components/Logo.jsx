import React from 'react';

function Logo({ className = "w-12 h-12" }) {
  return (
    <img src="/shreyavarma.com/logo.svg" alt="Site Logo" className={className} />
  );
}

export default Logo;
