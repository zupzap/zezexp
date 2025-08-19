import React, { useState } from 'react';

const DesktopIcon = ({ icon, label, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsSelected(!isSelected);
    if (onClick) onClick(e);
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    // Handle double click to open application
    console.log(`Opening ${label}`);
  };

  return (
    <div
      className={`flex flex-col items-center p-2 w-16 cursor-pointer select-none
                  ${isSelected ? 'bg-blue-500 bg-opacity-30 border border-blue-400 border-dashed' : ''}
                  hover:bg-blue-200 hover:bg-opacity-20 transition-colors duration-150`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-8 h-8 mb-1 filter drop-shadow-sm flex items-center justify-center">
        {icon.startsWith('/') ? (
          <img src={icon} alt={label} className="w-full h-full" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </div>
      <span className="text-white text-xs font-tahoma text-center leading-tight drop-shadow-md">
        {label}
      </span>
    </div>
  );
};

export default DesktopIcon;
