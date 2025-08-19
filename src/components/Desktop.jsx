import React, { useState } from 'react';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import StartMenu from './StartMenu';

const Desktop = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const handleStartClick = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const handleDesktopClick = () => {
    setIsStartMenuOpen(false);
  };

  return (
    <div 
      className="relative h-screen w-screen overflow-hidden cursor-default select-none"
      onClick={handleDesktopClick}
      style={{
        backgroundImage: 'url(/windowsxp.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 space-y-4">
        <DesktopIcon 
          icon="/recycle-bin.ico" 
          label="Recycle Bin" 
          onClick={(e) => e.stopPropagation()}
        />
        <DesktopIcon 
          icon="/my-computer.ico" 
          label="My Computer" 
          onClick={(e) => e.stopPropagation()}
        />
        <DesktopIcon 
          icon="/documents.ico" 
          label="My Documents" 
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Start Menu */}
      {isStartMenuOpen && (
        <StartMenu onClose={() => setIsStartMenuOpen(false)} />
      )}

      {/* Taskbar */}
      <Taskbar onStartClick={handleStartClick} />
    </div>
  );
};

export default Desktop;
