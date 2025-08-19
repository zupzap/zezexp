# Windows XP Desktop Website

A fun, nostalgic recreation of the classic Windows XP desktop interface built with React and Tailwind CSS.

## Features

- 🖥️ Authentic Windows XP desktop background with the iconic green hill
- 📋 Interactive taskbar with Start button, quick launch, and system tray
- 🗂️ Desktop icons (Recycle Bin, My Computer, My Documents)
- 📱 Functional Start menu with classic XP styling
- ⏰ Live clock in the system tray
- 🎨 Pixel-perfect Windows XP visual styling

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Tahoma Font** - Authentic Windows XP typography

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Desktop.jsx      # Main desktop container
│   ├── Taskbar.jsx      # Bottom taskbar with Start button
│   ├── DesktopIcon.jsx  # Individual desktop icons
│   └── StartMenu.jsx    # Start menu popup
├── App.js               # Main app component
├── index.js            # React entry point
└── index.css           # Global styles with Tailwind
```

## Components

### Desktop
Main container component that manages the desktop state and handles the overall layout.

### Taskbar
Bottom taskbar featuring:
- Start button with hover effects
- Quick launch area
- Task area for open applications
- System tray with live clock

### DesktopIcon
Reusable component for desktop icons with:
- Click selection states
- Double-click functionality
- Hover effects

### StartMenu
Classic Windows XP Start menu with:
- User profile section
- Application shortcuts
- System options (Log Off, Turn Off Computer)

## Customization

The project uses custom Tailwind colors and gradients defined in `tailwind.config.js`:
- `xp-blue`: Classic Windows XP blue
- `xp-green`: Start button green
- `xp-taskbar`: Taskbar gradient colors

## Browser Compatibility

Works in all modern browsers that support CSS Grid and Flexbox.
