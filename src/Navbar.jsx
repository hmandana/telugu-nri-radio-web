import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import logoSvg from '/logo.svg';
import {
  HomeIcon,
  RadioIcon,
  MicrophoneIcon,
  NewsIcon,
  PhoneIcon,
  InfoIcon,
  SunIcon,
  MoonIcon,
  CallIcon
} from './icons/index.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Live Radio', href: '/radio', icon: RadioIcon },
    { name: 'Programs', href: '/programs', icon: MicrophoneIcon },
    { name: 'News', href: '/news', icon: NewsIcon },
    { name: 'About', href: '/about', icon: InfoIcon }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.navbar.bg} backdrop-blur-xl ${theme.border.light}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
            <div className="relative">
              <img
                src={logoSvg}
                alt="Telugu NRI Radio"
                className="h-14 w-14 rounded-full bg-transparent p-1 animate-bounce hover:animate-spin transition-all duration-500"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`${theme.navbar.text} font-bold text-lg`}>Telugu NRI Radio</h1>
              <p className={`${theme.navbar.textMuted} text-xs`}>ప్రవాసాంధ్రుల గుండె చప్పుడు</p>
            </div>
          </Link>

          {/* Live Status Badge */}
          {/* <div className="hidden md:flex items-center gap-2 bg-red-500/20 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-live-pulse"></div>
            <span className="text-red-400 text-sm font-medium">LIVE</span>
          </div> */}

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.href}
                  className={`flex items-center gap-2 ${theme.navbar.textMuted} hover:${theme.navbar.text} ${theme.navbar.buttonBg} hover:bg-white/20 transition-all duration-200 text-sm font-medium px-3 py-2 rounded-lg group`}
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://www.facebook.com/TeluguNriRadio/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.navbar.textMuted} hover:text-blue-400 transition-colors p-2 ${theme.navbar.buttonBg} rounded-lg`}
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://x.com/TeluguNriRadio/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.navbar.textMuted} hover:text-gray-300 transition-colors p-2 ${theme.navbar.buttonBg} rounded-lg`}
                title="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCJoUiTK6OHcHK6sRuZYPPtQ"
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme.navbar.textMuted} hover:text-red-500 transition-colors p-2 ${theme.navbar.buttonBg} rounded-lg`}
                title="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <Link
                to="/contact"
                className={`${theme.navbar.textMuted} hover:text-blue-300 transition-colors p-2 ${theme.navbar.buttonBg} rounded-lg`}
                title="Contact Us"
              >
                <CallIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${theme.navbar.textMuted} hover:${theme.navbar.text} ${theme.navbar.buttonBg} hover:bg-white/20 hover:scale-110`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <SunIcon className="w-5 h-5 animate-pulse-text" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden ${theme.navbar.text} p-2 ${theme.navbar.buttonBg} rounded-lg transition-colors`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 ${theme.navbar.text} transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 ${theme.navbar.text} transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 ${theme.navbar.text} transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className={`${theme.bg.accent} backdrop-blur-xl border-t border-black/10`}>
          <div className="px-4 py-4 space-y-1">
            {/* Live Status for Mobile */}
            <div className="flex items-center justify-center gap-2 bg-red-500/20 px-3 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-live-glow"></div>
              <span className="text-red-400 text-sm font-medium">LIVE STREAMING</span>
            </div>

            {/* Menu Items */}
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-black/80 hover:text-black hover:bg-black/10 px-4 py-3 rounded-lg transition-all duration-200 font-medium group"
                >
                  <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.name}</span>
                </Link>
              );
            })}

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center gap-6 pt-4 mt-4 border-t border-black/10">
              <a
                href="https://www.facebook.com/TeluguNriRadio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-blue-600 transition-colors p-2"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://x.com/TeluguNriRadio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-gray-800 transition-colors p-2"
                title="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCJoUiTK6OHcHK6sRuZYPPtQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-red-600 transition-colors p-2"
                title="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-black/60 hover:text-blue-600 transition-colors p-2"
                title="Contact Us"
              >
                <CallIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
