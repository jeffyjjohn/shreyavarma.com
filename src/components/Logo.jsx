import React from 'react';

function Logo({ className = "w-12 h-12" }) {
  return (
    <img src="/logo.svg" alt="Site Logo" className={className} />
  );
}

export default Logo;
