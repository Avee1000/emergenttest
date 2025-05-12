import React from 'react';

const Logo = ({ className = '', width = 40, height = 40 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="60" cy="60" r="55" fill="#6C40FF" />
      <path 
        d="M51.5 36C51.5 47.5 68.5 53 68.5 60C68.5 67 51.5 72.5 51.5 84C51.5 95.5 68.5 101 68.5 84C68.5 67 85.5 60 85.5 47.5C85.5 35 68.5 29.5 68.5 47.5C68.5 65.5 34.5 59 34.5 84C34.5 109 85.5 109 85.5 84" 
        stroke="white" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      <circle cx="60" cy="60" r="52" stroke="#4BD28F" strokeWidth="1.5" strokeDasharray="6 4" />
    </svg>
  );
};

export default Logo;
