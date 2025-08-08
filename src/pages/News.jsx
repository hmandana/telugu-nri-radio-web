import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Banner from '../components/Banner';
import { NewsIcon, ClockIcon, RadioIcon } from '../icons/index.jsx';

const News = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg.primary} min-h-screen`}>
      {/* Banner Section */}
      <div className="px-4 py-16">
        <Banner
          title="Telugu News & Updates"
          description="Stay informed with the latest news from Telugu states and communities worldwide"
          badge={{
            text: "BREAKING NEWS",
            leftIcon: NewsIcon,
            rightIcon: NewsIcon
          }}
          backgroundIntensity="strong"
        />
      </div>
      
      {/* Content Section */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto w-full">
            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 mb-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center gap-3`}>
                <RadioIcon className="w-6 h-6 text-red-500" />
                Breaking News
              </h2>
              <p className={`${theme.text.primary} text-lg mb-2`}>Latest updates coming soon...</p>
              <p className={`${theme.text.secondary} text-sm`}>We're working on bringing you real-time Telugu news updates</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-6 ${theme.border.light} border`}>
                <h3 className={`${theme.text.primary} font-semibold text-lg mb-3 flex items-center gap-2`}>
                  <RadioIcon className="w-5 h-5 text-orange-500" />
                  Andhra Pradesh
                </h3>
                <p className={`${theme.text.secondary} text-sm`}>Latest news and updates from Andhra Pradesh</p>
              </div>

              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-6 ${theme.border.light} border`}>
                <h3 className={`${theme.text.primary} font-semibold text-lg mb-3 flex items-center gap-2`}>
                  <RadioIcon className="w-5 h-5 text-blue-500" />
                  Telangana
                </h3>
                <p className={`${theme.text.secondary} text-sm`}>Current affairs and developments from Telangana</p>
              </div>

              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-6 ${theme.border.light} border`}>
                <h3 className={`${theme.text.primary} font-semibold text-lg mb-3 flex items-center gap-2`}>
                  <NewsIcon className="w-5 h-5 text-green-500" />
                  NRI Community
                </h3>
                <p className={`${theme.text.secondary} text-sm`}>News affecting Telugu communities abroad</p>
              </div>

              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-6 ${theme.border.light} border`}>
                <h3 className={`${theme.text.primary} font-semibold text-lg mb-3 flex items-center gap-2`}>
                  <RadioIcon className="w-5 h-5 text-purple-500" />
                  Entertainment
                </h3>
                <p className={`${theme.text.secondary} text-sm`}>Latest from Telugu cinema and entertainment industry</p>
              </div>
            </div>

            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-6 ${theme.border.light} border`}>
              <h3 className={`${theme.text.primary} font-semibold text-lg mb-4 flex items-center gap-3`}>
                <ClockIcon className="w-5 h-5" />
                News Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className={`${theme.text.accent} font-medium`}>Morning Bulletin</div>
                  <div className={`${theme.text.secondary}`}>8:00 AM - 8:15 AM</div>
                </div>
                <div>
                  <div className={`${theme.text.accent} font-medium`}>Afternoon Update</div>
                  <div className={`${theme.text.secondary}`}>1:00 PM - 1:15 PM</div>
                </div>
                <div>
                  <div className={`${theme.text.accent} font-medium`}>Evening Report</div>
                  <div className={`${theme.text.secondary}`}>7:00 PM - 7:15 PM</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default News;
