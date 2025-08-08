import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import MusicWaveBackground from '../components/MusicWaveBackground';
import Banner from '../components/Banner';
import { MusicIcon, GlobeIcon, RadioIcon } from '../icons/index.jsx';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg.primary}`}>
      <MusicWaveBackground intensity="strong">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 pb-32 pt-16">
          <Banner
            title="Telugu NRI Radio"
            titleElement="h1"
            logoSize="large"
            subtitle="ప్రవాసాంధ్రుల గుండె చప్పుడు"
            description="Connecting Telugu hearts worldwide through music, culture, and community"
            showBackground={false}
            layout="centered"
          >
            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <div className={`${theme.bg.tertiary} rounded-2xl p-6 ${theme.border.light} border-2 hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl group`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MusicIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className={`${theme.text.primary} font-bold text-lg mb-2 text-center`}>24/7 Music</h3>
                <p className={`${theme.text.secondary} text-center leading-relaxed`}>Non-stop Telugu hits from classics to contemporary</p>
              </div>

              <div className={`${theme.bg.tertiary} rounded-2xl p-6 ${theme.border.light} border-2 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl group`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GlobeIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className={`${theme.text.primary} font-bold text-lg mb-2 text-center`}>Global Reach</h3>
                <p className={`${theme.text.secondary} text-center leading-relaxed`}>Connecting Telugu communities across continents</p>
              </div>

              <div className={`${theme.bg.tertiary} rounded-2xl p-6 ${theme.border.light} border-2 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl group`}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <RadioIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className={`${theme.text.primary} font-bold text-lg mb-2 text-center`}>Live Shows</h3>
                <p className={`${theme.text.secondary} text-center leading-relaxed`}>Interactive programs with call-ins and requests</p>
              </div>
            </div>
          </Banner>
        </div>
      </MusicWaveBackground>
    </div>
  );
};

export default Home;
