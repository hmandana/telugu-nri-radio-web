import React from 'react';

// Home icon
export const HomeIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.1L1 12h3v9h6v-6h4v6h6v-9h3L12 2.1zM12 4.9l6 5.4v8.7h-2v-6H8v6H6v-8.7l6-5.4z"/>
  </svg>
);

// Radio icon
export const RadioIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M20 6h-2.74L18.15 3.65c.15-.2.15-.5 0-.7s-.5-.15-.7 0L15.69 4.7 3.96 1.54c-.24-.07-.49.06-.56.3s.06.49.3.56L15.31 5.16l-2.55 2.55c-.2.2-.2.51 0 .71c.1.1.23.15.35.15s.26-.05.35-.15L15.31 6H20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h8.31l-1.41 1.41c-.2.2-.2.51 0 .71c.1.1.23.15.35.15s.26-.05.35-.15L13.31 6H20zM20 8H4v12h16V8zM6 11c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm0-1c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3zm6 1h6v2h-6v-2zm0 4h4v2h-4v-2z"/>
  </svg>
);

// Microphone icon
export const MicrophoneIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 1c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3s3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 9c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1v6zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H7c0 3.53 2.61 6.43 6 6.92V21h-3v2h8v-2h-3v-2.08c3.39-.49 6-3.39 6-6.92h-2z"/>
  </svg>
);

// News/Newspaper icon
export const NewsIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4zM2 4h20c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 2v12h16V6H4z"/>
  </svg>
);

// Phone icon
export const PhoneIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
  </svg>
);

// Info icon
export const InfoIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/>
  </svg>
);

// Music note icon
export const MusicIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

// Globe/World icon
export const GlobeIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

// Play icon
export const PlayIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8 5v14l11-7z"/>
  </svg>
);

// Pause icon
export const PauseIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
);

// Warning icon
export const WarningIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  </svg>
);

// Link icon
export const LinkIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
  </svg>
);

// Clock icon
export const ClockIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

// Sun icon (for light mode)
export const SunIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
  </svg>
);

// Moon icon (for dark mode)
export const MoonIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
  </svg>
);

// Flag icons for countries
export const IndiaFlagIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} viewBox="0 0 24 16" {...props}>
    <rect width="24" height="5.33" fill="#ff9933"/>
    <rect y="5.33" width="24" height="5.34" fill="#ffffff"/>
    <rect y="10.67" width="24" height="5.33" fill="#138808"/>
    <circle cx="12" cy="8" r="2" fill="none" stroke="#000080" strokeWidth="0.2"/>
    <g fill="#000080" strokeWidth="0.1">
      {Array.from({length: 24}, (_, i) => (
        <line key={i} x1="12" y1="6" x2="12" y2="6.5" 
              transform={`rotate(${i * 15} 12 8)`} stroke="#000080" strokeWidth="0.1"/>
      ))}
    </g>
  </svg>
);

export const USAFlagIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} viewBox="0 0 24 16" {...props}>
    <rect width="24" height="16" fill="#B22234"/>
    <rect y="1.23" width="24" height="1.23" fill="#FFFFFF"/>
    <rect y="3.69" width="24" height="1.23" fill="#FFFFFF"/>
    <rect y="6.15" width="24" height="1.23" fill="#FFFFFF"/>
    <rect y="8.62" width="24" height="1.23" fill="#FFFFFF"/>
    <rect y="11.08" width="24" height="1.23" fill="#FFFFFF"/>
    <rect y="13.54" width="24" height="1.23" fill="#FFFFFF"/>
    <rect width="9.6" height="8.62" fill="#3C3B6E"/>
    <g fill="#FFFFFF">
      {/* Stars would be complex, using simplified version */}
      <text x="4.8" y="4.5" fontSize="6" textAnchor="middle">★</text>
    </g>
  </svg>
);

export const UKFlagIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} viewBox="0 0 24 16" {...props}>
    <rect width="24" height="16" fill="#012169"/>
    <path d="M0 0l24 16M24 0L0 16" stroke="#FFFFFF" strokeWidth="1.6"/>
    <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="0.8"/>
    <path d="M12 0v16M0 8h24" stroke="#FFFFFF" strokeWidth="2.4"/>
    <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="1.6"/>
  </svg>
);

// Social media icons already exist in the files, will keep those
// WhatsApp, Facebook, X (Twitter), Skype icons are already properly implemented

// Stop icon
export const StopIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6 6h12v12H6z"/>
  </svg>
);

// Team/People icon
export const TeamIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.999 2.999 0 0016.96 6c-.81 0-1.54.43-1.96 1.09l-1.01 1.6C13.7 9.35 13.22 10 12 10s-1.7-.65-1.99-1.31l-1.01-1.6C8.58 6.43 7.85 6 7.04 6c-1.3 0-2.39.84-2.75 2L1.5 16H4v6h2v-6h4v6h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm-5-2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
  </svg>
);

// Mobile/Phone mobile icon
export const MobileIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H7V6h10v10z"/>
  </svg>
);

// Live/Record icon  
export const LiveIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1l3.09 6.26L22 9l-5.91 5.07L17.82 21 12 18.27 6.18 21l1.73-6.93L2 9l6.91-1.74L12 1z"/>
  </svg>
);

// Call icon (phone with call symbol)
export const CallIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

// Volume icons
export const VolumeHighIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
  </svg>
);

export const VolumeLowIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z"/>
  </svg>
);

export const VolumeMutedIcon = ({ className = "w-5 h-5", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
  </svg>
);
