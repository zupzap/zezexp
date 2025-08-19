import React from 'react';

const StartMenu = ({ onClose }) => {
  const menuItems = [
    { icon: '📁', label: 'My Documents', separator: false },
    { icon: '🖼️', label: 'My Pictures', separator: false },
    { icon: '🎵', label: 'My Music', separator: false },
    { icon: '💻', label: 'My Computer', separator: false },
    { icon: '🌐', label: 'My Network Places', separator: true },
    { icon: '🎮', label: 'Games', separator: false },
    { icon: '📋', label: 'Control Panel', separator: false },
    { icon: '🔧', label: 'Help and Support', separator: true },
    { icon: '🔍', label: 'Search', separator: false },
    { icon: '🏃', label: 'Run...', separator: true },
  ];

  const handleItemClick = (item) => {
    console.log(`Clicked: ${item.label}`);
    onClose();
  };

  return (
    <div 
      className="absolute bottom-10 left-0 w-80 bg-gradient-to-b from-blue-50 to-blue-100 
                 border-2 border-blue-300 rounded-tr-lg shadow-2xl font-tahoma"
      onClick={(e) => e.stopPropagation()}
    >
      {/* User Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-tr-lg">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-200 rounded border-2 border-white flex items-center justify-center text-2xl">
            👤
          </div>
          <span className="text-white font-bold text-lg">User</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        {menuItems.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => handleItemClick(item)}
              className="w-full flex items-center px-4 py-2 hover:bg-blue-200 transition-colors duration-150 text-left"
            >
              <span className="text-lg mr-3">{item.icon}</span>
              <span className="text-sm text-gray-800">{item.label}</span>
            </button>
            {item.separator && <div className="border-t border-gray-300 mx-2 my-1"></div>}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 p-2 bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="flex justify-between">
          <button 
            onClick={onClose}
            className="px-4 py-1 bg-gradient-to-b from-orange-400 to-orange-600 hover:from-orange-300 hover:to-orange-500 
                       text-white text-sm font-bold border border-orange-300 rounded shadow-sm"
          >
            Log Off
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-1 bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 
                       text-white text-sm font-bold border border-red-300 rounded shadow-sm"
          >
            Turn Off Computer
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
