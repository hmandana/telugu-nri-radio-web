import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Banner from '../components/Banner';
import { 
  SunIcon, 
  MusicIcon, 
  MicrophoneIcon, 
  RadioIcon, 
  MoonIcon, 
  ClockIcon,
  PhoneIcon,
  LiveIcon
} from '../icons/index.jsx';

const LiveRadio = () => {
  const { theme } = useTheme();
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/New_York' // EST timezone
    });
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/New_York'
    });
  };

  const todaySchedule = [
    {
      time: "6:00 AM - 9:00 AM",
      show: "మార్నింగ్ మెలోడీస్",
      description: "Classical & Devotional songs to start your day",
      host: "RJ Priya",
      status: "upcoming",
      icon: SunIcon
    },
    {
      time: "9:00 AM - 12:00 PM",
      show: "Telugu Hits Express",
      description: "Latest Telugu cinema songs and chartbusters",
      host: "RJ Kiran",
      status: "live",
      icon: MusicIcon
    },
    {
      time: "12:00 PM - 1:00 PM",
      show: "తెలుగు టాక్ షో",
      description: "Interactive discussions and listener calls",
      host: "RJ Ramesh",
      status: "upcoming",
      icon: MicrophoneIcon
    },
    {
      time: "1:00 PM - 4:00 PM",
      show: "Afternoon Melodies",
      description: "Soothing Telugu songs for your afternoon",
      host: "RJ Swathi",
      status: "upcoming",
      icon: SunIcon
    },
    {
      time: "4:00 PM - 6:00 PM",
      show: "Request Hour",
      description: "Your favorite songs on request",
      host: "RJ Suresh",
      status: "upcoming",
      icon: RadioIcon
    },
    {
      time: "6:00 PM - 8:00 PM",
      show: "Evening Express",
      description: "Telugu folk and traditional songs",
      host: "RJ Lakshmi",
      status: "upcoming",
      icon: MusicIcon
    },
    {
      time: "8:00 PM - 11:00 PM",
      show: "రాత్రి రాగం",
      description: "Romantic melodies for the evening",
      host: "RJ Arjun",
      status: "upcoming",
      icon: MoonIcon
    },
    {
      time: "11:00 PM - 6:00 AM",
      show: "Overnight Mix",
      description: "Continuous music mix for night owls",
      host: "Auto DJ",
      status: "upcoming",
      icon: MoonIcon
    }
  ];

  return (
    <div className={`${theme.bg.primary} min-h-screen`}>
      {/* Banner Section */}
      <div className="px-4 py-16">
        <Banner
          title="Live Radio Schedule"
          subtitle={`${getCurrentDate()} • ${getCurrentTime()} EST`}
          description="Daily programming schedule and show information"
          backgroundIntensity="strong"
          layout="centered"
        />
      </div>
      
      {/* Content Section */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto w-full">
            { /* Today's Schedule */}
            <div className={`${theme.bg.card} backdrop-blur-lg rounded-2xl p-6 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-2xl font-bold mb-6 flex items-center gap-3`}>
                <ClockIcon className="w-6 h-6" />
                Today's Schedule
              </h2>

              <div className="space-y-4">
                {todaySchedule.map((show, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${show.status === 'live'
                      ? 'bg-green-500/20 border border-green-500/30'
                      : `${theme.bg.tertiary} ${theme.bg.cardHover}`
                      }`}
                  >
                    <div className="flex items-center justify-center w-10 h-10">
                      <show.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`${theme.text.primary} font-semibold text-lg`}>{show.show}</h3>
                        {show.status === 'live' && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-live-pulse">
                            LIVE
                          </span>
                        )}
                      </div>
                      <p className={`${theme.text.secondary} text-sm mb-1`}>{show.description}</p>
                      <div className={`flex items-center gap-4 text-xs ${theme.text.tertiary}`}>
                        <span className="flex items-center gap-1">
                          <MicrophoneIcon className="w-3 h-3" />
                          {show.host}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {show.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              { /* Contact Info */}
              <div className={`mt-8 p-4 ${theme.bg.accentMuted} rounded-xl ${theme.border.light} border`}>
                <h3 className={`${theme.text.primary} font-semibold mb-2 flex items-center gap-2`}>
                  <PhoneIcon className="w-4 h-4" />
                  Request a Song or Join the Show
                </h3>
                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm ${theme.text.secondary}`}>
                  <div className="flex items-center gap-1">
                    <PhoneIcon className="w-3 h-3" />
                    WhatsApp: +91-9705222005
                  </div>
                  <div className="flex items-center gap-1">
                    <PhoneIcon className="w-3 h-3" />
                    Call: +1-9197012005 (USA)
                  </div>
                  <div className="flex items-center gap-1">
                    <PhoneIcon className="w-3 h-3" />
                    Skype: telugunriradio
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRadio;
