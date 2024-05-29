import React from 'react';

const ButtonWithUnderline = ({ text, onClick, underlineColor, type }) => {
  return (
    <button 
    onClick={onClick} 
    className="text-[16px] inline-block relative my-3 mr-2 btn4 pb-1 font-semibold tracking-wider leading-none overflow-hidden" 
    type={type}
  >
    <span 
      className={`absolute inset-x-0 h-[2px] bottom-0 ${underlineColor} transition-transform duration-200 origin-left transform translate-x-full group-hover:translate-x-0`}
    ></span>
    {text}
  </button>

  );
};

export default ButtonWithUnderline;