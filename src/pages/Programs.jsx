import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Banner from '../components/Banner';
import { SunIcon, MicrophoneIcon, MusicIcon, MoonIcon, PhoneIcon } from '../icons/index.jsx';

const Programs = () => {
  const { theme } = useTheme();
  const programs = [
    {
      name: "మార్నింగ్ మెలోడీస్",
      time: "6:00 AM - 9:00 AM",
      description: "Start your day with beautiful Telugu classical and devotional songs",
      icon: SunIcon
    },
    {
      name: "తెలుగు టాక్ షో",
      time: "12:00 PM - 1:00 PM",
      description: "Interactive discussions on current affairs and community topics",
      icon: MicrophoneIcon
    },
    {
      name: "Evening Express",
      time: "6:00 PM - 8:00 PM",
      description: "Latest Telugu hits and listener requests",
      icon: MusicIcon
    },
    {
      name: "రాత్రి రాగం",
      time: "9:00 PM - 11:00 PM",
      description: "Soothing melodies and romantic songs for the night",
      icon: MoonIcon
    }
  ];

  return (
    <div className={`${theme.bg.primary} min-h-screen`}>
      {/* Banner Section */}
      <div className="px-4 py-16">
        <Banner
          title="Our Programs"
          description="Discover our diverse range of Telugu programs designed to entertain and connect"
          badge={{
            text: "LIVE SHOWS",
            leftIcon: MicrophoneIcon,
            rightIcon: MicrophoneIcon
          }}
          backgroundIntensity="strong"
        />
      </div>
      
      {/* Content Section */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div key={index} className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-6 ${theme.cardHover} transition-all duration-300 ${theme.border.light} border`}>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12">
                    <program.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`${theme.text.primary} font-semibold text-lg mb-2`}>{program.name}</h3>
                    <div className={`${theme.text.accent} text-sm font-medium mb-3`}>{program.time}</div>
                    <p className={`${theme.text.secondary} text-sm`}>{program.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-4`}>Want to be part of our programs?</h2>
              <p className={`${theme.text.secondary} mb-6`}>Call us during live shows to share your thoughts, request songs, or participate in discussions!</p>
              <div className={`${theme.text.accent} font-bold text-lg flex items-center justify-center gap-2`}>
                <PhoneIcon className="w-5 h-5" />
                Call: +1-919-701-2005
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
