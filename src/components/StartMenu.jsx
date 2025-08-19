import React, { useState } from 'react';

const StartMenu = ({ onClose }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  const leftPanelItems = [
    { 
      icon: '/internet-explorer.svg', 
      label: 'Internet', 
      subtitle: 'Internet Explorer',
      type: 'program'
    },
    { 
      icon: './email.png', 
      label: 'E-mail', 
      subtitle: 'The Bat!',
      type: 'program'
    },
    { 
      icon: './word.svg', 
      label: 'Microsoft Word',
      type: 'program'
    },
    { 
      icon: './winamp.png', 
      label: 'Winamp',
      type: 'program'
    },
    { 
      icon: './huelogo.svg', 
      label: 'Hue AI',
      type: 'program'
    }
  ];

  const rightPanelItems = [
    { 
      icon: './documents.ico', 
      label: 'My Documents', 
      subtitle: 'Letters, reports, documents',
      type: 'folder'
    },
    { 
      icon: './my-computer.ico', 
      label: 'My Computer', 
      subtitle: 'Disk drives and hardware',
      type: 'folder'
    },
    { 
      icon: './pictures.ico', 
      label: 'My Pictures',
      type: 'folder'
    },
    { 
      icon: './music.ico', 
      label: 'My Music',
      type: 'folder'
    },
    { 
      icon: './recent-doc.ico', 
      label: 'Recent Documents', 
      type: 'folder'
    },
    { 
      icon: './control-panel.ico', 
      label: 'Control Panel',
      type: 'system'
    },
    { 
      icon: './default.gif', 
      label: 'Set Program Access and Defaults',
      type: 'system'
    },
    { 
      icon: './connect-to.ico', 
      label: 'Connect To', 
      type: 'system'
    },
    { 
      icon: './printer.ico', 
      label: 'Printers and Faxes',
      type: 'system'
    }
  ];

  const bottomItems = [
    { 
      icon: './help.ico', 
      label: 'Help and Support',
      type: 'bottom'
    },
    { 
      icon: './search.ico', 
      label: 'Search',
      type: 'bottom'
    },
    { 
      icon: '/run.ico', 
      label: 'Run',
      type: 'bottom'
    }
  ];

  const allProgramsItems = [
    { 
      icon: './folder.ico', 
      label: 'What\'s New',
      type: 'folder'
    },
    { 
      icon: './folder.ico', 
      label: 'Features',
      hasArrow: true,
      type: 'folder'
    },
    { 
      icon: './folder.ico', 
      label: 'Documentation',
      hasArrow: true,
      type: 'folder'
    },
    { 
      icon: './folder.ico', 
      label: 'Browsers List',
      hasArrow: true,
      type: 'folder'
    },
    { 
      icon: './folder.ico', 
      label: 'Deluxe Tuner Application',
      type: 'folder'
    },
    { 
      icon: './folder.ico', 
      label: 'Menu Samples',
      hasArrow: true,
      type: 'folder'
    },
    { 
      icon: './folder.ico', 
      label: 'Purchase',
      hasArrow: true,
      type: 'folder'
    },
    { 
      icon: './folder.ico', 
      label: 'Contacts',
      type: 'folder'
    }
  ];

  const handleItemClick = (item) => {
    console.log(`Clicked: ${item.label}`);
    onClose();
  };

  const handleAllProgramsClick = () => {
    setShowAllPrograms(!showAllPrograms);
  };

  return (
    <div 
      className="absolute bottom-[30px] left-0 w-[450px] bg-white border-2 border-[#0054e3] shadow-2xl start-menu"
      onClick={(e) => e.stopPropagation()}
      style={{
        borderRadius: '0 8px 8px 0',
        fontFamily: 'Tahoma, sans-serif'
      }}
    >
      {/* User Header */}
      <div className="h-[60px] flex items-center px-5 text-white font-bold text-[16px] user-header">
        <img 
          src="./user.png" 
          alt="User" 
          className="w-12 h-12 mr-3"
          style={{ imageRendering: 'pixelated' }}
        />
        User
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Panel */}
        <div className="w-[200px] bg-white border-r border-[#c7d2fe] py-2">
          {leftPanelItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-3 py-1 cursor-pointer text-[11px] ${
                hoveredItem === `left-${index}` ? 'bg-[#316ac5] text-white' : 'text-black'
              }`}
              onMouseEnter={() => setHoveredItem(`left-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item)}
            >
              <img 
                src={item.icon} 
                alt={item.label}
                className="w-8 h-8 mr-2"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex flex-col">
                <span className="font-bold">{item.label}</span>
                {item.subtitle && (
                  <span className="text-[10px] opacity-75">{item.subtitle}</span>
                )}
              </div>
            </div>
          ))}
          
          <div className="border-t border-[#c7d2fe] mx-3 my-2"></div>
          
          <div
            className={`flex items-center px-3 py-2 cursor-pointer text-[11px] ${
              hoveredItem === 'all-programs' ? 'bg-[#316ac5] text-white' : 'text-black'
            }`}
            onMouseEnter={() => setHoveredItem('all-programs')}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={handleAllProgramsClick}
          >
            <span className="font-bold">All Programs</span>
            <div className="ml-auto">
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-current"></div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 bg-[#d6dff7] py-2">
          {rightPanelItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-3 py-1 cursor-pointer text-[11px] ${
                hoveredItem === `right-${index}` ? 'bg-[#316ac5] text-white' : 'text-[#003c74]'
              }`}
              onMouseEnter={() => setHoveredItem(`right-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item)}
            >
              <img 
                src={item.icon} 
                alt={item.label}
                className="w-8 h-8 mr-3"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="flex flex-col flex-1">
                <span className="font-bold">{item.label}</span>
                {item.subtitle && (
                  <span className="text-[10px] opacity-75">{item.subtitle}</span>
                )}
              </div>
              {item.hasArrow && (
                <div className="ml-auto">
                  <img 
                    src="./right-arrow.ico" 
                    alt="Arrow"
                    className="w-3 h-3"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
              )}
            </div>
          ))}
          
          <div className="border-t border-[#9bb3e8] mx-3 my-2"></div>
          
          {bottomItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center px-3 py-1 cursor-pointer text-[11px] ${
                hoveredItem === `bottom-${index}` ? 'bg-[#316ac5] text-white' : 'text-[#003c74]'
              }`}
              onMouseEnter={() => setHoveredItem(`bottom-${index}`)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item)}
            >
              <img 
                src={item.icon} 
                alt={item.label}
                className="w-8 h-8 mr-3"
                style={{ imageRendering: 'pixelated' }}
              />
              <span className="font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Programs Submenu */}
      {showAllPrograms && (
        <div 
          className="absolute bottom-[30px] right-0 w-[280px] bg-white border-2 border-[#0054e3] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          style={{
            borderRadius: '8px 0 8px 8px',
            fontFamily: 'Tahoma, sans-serif'
          }}
        >
          <div className="py-2">
            {allProgramsItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center px-3 py-1 cursor-pointer text-[11px] ${
                  hoveredItem === `programs-${index}` ? 'bg-[#316ac5] text-white' : 'text-black'
                }`}
                onMouseEnter={() => setHoveredItem(`programs-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(item)}
              >
                <img 
                  src={item.icon} 
                  alt={item.label}
                  className="w-4 h-4 mr-3"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="flex flex-col flex-1">
                  <span className="font-bold">{item.label}</span>
                </div>
                {item.hasArrow && (
                  <div className="ml-auto">
                    <div className="w-0 h-0 border-l-[4px] border-l-current border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartMenu;
