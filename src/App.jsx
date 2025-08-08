import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { PlayerProvider } from './contexts/PlayerContext';
import Navbar from './Navbar';
import Player from './Player';
import PlayerControls from './components/PlayerControls';
import Home from './pages/Home';
import LiveRadio from './pages/LiveRadio';
import Programs from './pages/Programs';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/About';
import ColorPaletteDemo from './components/ColorPaletteDemo';
import ThemeTest from './components/ThemeTest';

const AppContent = () => {
  const { theme } = useTheme();

  // We'll render Player only once outside the conditional UI

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/radio" element={<LiveRadio />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/colors" element={<ColorPaletteDemo />} />
            <Route path="/theme-test" element={<ThemeTest />} />
          </Routes>
        </main>
      
      {/* Hidden Persistent Audio Player - Always Rendered */}
      <div style={{ display: 'none' }}>
        <Player />
      </div>

      {/* Persistent Audio Player with Copyright */}
      <div className="fixed bottom-6 left-2 right-2 z-40">
        <div className="max-w-6xl mx-auto">
          {/* Copyright Text Above Player */}
          <div className="text-center mb-2">
            <p className={`${theme.text.muted} text-xs opacity-75`}>
              © 2025 HMV Entertainment • Telugu NRI Radio • Connecting hearts worldwide
            </p>
          </div>
          
          {/* Player Bar */}
          <div className={`backdrop-blur-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl rounded-full px-6 py-4 ${theme.player.background} ${theme.player.border}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src="/logo.svg"
                    alt="Telugu NRI Radio"
                    className="w-12 h-12 rounded-lg"
                  />
                  {/* LIVE Badge */}
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse shadow-lg">
                    LIVE
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className={`${theme.player.text} text-base font-semibold truncate`}>Telugu NRI Radio</div>
                  <div className={`${theme.player.textMuted} text-sm truncate`}>
                    ప్రవాసాంధ్రుల గుండె చప్పుడు
                  </div>
                </div>
              </div>
              
              {/* Player Controls */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <PlayerControls />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Router>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <PlayerProvider>
        <AppContent />
      </PlayerProvider>
    </ThemeProvider>
  )
}

export default App
