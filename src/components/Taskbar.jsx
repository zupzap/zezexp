import React, { useState, useEffect } from 'react';

const Taskbar = ({ onStartClick }) => {
  const [isStartHovered, setIsStartHovered] = useState(false);
  const [isStartPressed, setIsStartPressed] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStartClick = () => {
    setIsStartPressed(!isStartPressed);
    onStartClick();
  };

  return (
    <div id="taskbar" className="flex absolute bottom-0 w-full h-[30px]">
      {/* Taskbar Background */}
      <div className="background sliced vertical absolute w-full h-full">
        <div className="row top h-[15px]"></div>
        <div className="row middle flex-grow"></div>
        <div className="row bottom h-[11px]"></div>
      </div>

      {/* Start Button */}
      <div 
        id="start-button" 
        className={`flex-shrink-0 ${isStartHovered ? 'hover' : ''} ${isStartPressed ? 'pressed' : ''}`}
        onMouseEnter={() => setIsStartHovered(true)}
        onMouseLeave={() => setIsStartHovered(false)}
        onClick={handleStartClick}
      >
        <div className="container relative overflow-hidden">
          <div className="background sliced absolute w-full h-full">
            <div className="column left w-[6px] flex flex-col">
              <div className="row top h-[13px]"></div>
              <div className="row middle flex-grow"></div>
              <div className="row bottom h-[14px]"></div>
            </div>
            <div className="column middle flex flex-col flex-grow">
              <div className="row top h-[13px]"></div>
              <div className="row middle flex-grow"></div>
              <div className="row bottom h-[14px]"></div>
            </div>
            <div className="column right w-[52px] flex flex-col">
              <div className="row top h-[13px]"></div>
              <div className="row middle flex-grow"></div>
              <div className="row bottom h-[14px]"></div>
            </div>
          </div>
          <div className="content flex items-center relative mx-[10px] my-[2px] mr-[24px] mb-[4px] h-[26px]">
            <span className="icon">
              <img 
                src="https://raw.githubusercontent.com/tdcosta100/WindowsXP/master/images/System/WindowsLogo-small.png" 
                alt="Windows Logo"
                className="block"
                style={{ imageRendering: 'pixelated' }}
              />
            </span>
            <span className="text text-white font-franklin-gothic italic text-[14pt] ml-1 mb-[1px] pr-[3px]" 
                  style={{ 
                    textShadow: '1px 2px 2px rgb(69, 76, 16), 0 0 3px rgb(69, 76, 16)',
                    fontFamily: 'Franklin Gothic Medium, sans-serif'
                  }}>
              start
            </span>
          </div>
          <div className="overlay absolute left-0 top-0 w-full h-full cursor-pointer" title="Click here to begin"></div>
        </div>
      </div>

      {/* Task Band */}
      <div id="task-band" className="flex-grow"></div>

      {/* Tray Notify */}
      <div id="tray-notify" className="flex-shrink-0">
        <div className="container relative overflow-hidden h-full">
          <div className="background sliced absolute w-full h-full">
            <div className="column left w-[34px] flex flex-col">
              <div className="row top h-[12px]"></div>
              <div className="row middle flex-grow"></div>
              <div className="row bottom h-[12px]"></div>
            </div>
            <div className="column middle flex flex-col flex-grow">
              <div className="row top h-[12px]"></div>
              <div className="row middle flex-grow"></div>
              <div className="row bottom h-[12px]"></div>
            </div>
            <div className="column right w-[10px] flex flex-col">
              <div className="row top h-[12px]"></div>
              <div className="row middle flex-grow"></div>
              <div className="row bottom h-[12px]"></div>
            </div>
          </div>
          <div className="content flex flex-row-reverse items-center relative mx-[19px] my-0 mr-[7px] h-[30px] text-white text-[8pt]"
               style={{ fontFamily: 'Tahoma, sans-serif' }}>
            <div className="clock w-[40px] text-center relative h-full flex items-center justify-center">
              <div className="text">{currentTime}</div>
              <div className="overlay absolute left-0 top-0 w-full h-full" title="Monday, April 8, 2019"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
