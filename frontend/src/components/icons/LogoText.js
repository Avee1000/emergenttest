import React from 'react';
import Logo from './Logo';

const LogoText = ({ className = '', size = 40 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Logo width={size} height={size} />
      <div className="ml-3 flex flex-col justify-center">
        <span className="font-display font-bold text-xl text-primary leading-none">SolaceVR</span>
        <span className="text-xs text-gray-600 tracking-widest">SPIRITUAL TECH</span>
      </div>
    </div>
  );
};

export default LogoText;
