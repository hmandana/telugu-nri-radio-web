import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Banner from '../components/Banner';
import {
  InfoIcon,
  MusicIcon,
  GlobeIcon,
  MicrophoneIcon,
  RadioIcon,
  TeamIcon
} from '../icons/index.jsx';

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg.primary} min-h-screen`}>
      {/* Banner Section */}
      <div className="px-4 py-16">
        <Banner
          title="About Telugu NRI Radio"
          description="Your premier Telugu radio station serving communities across the globe"
          backgroundIntensity="strong"
          layout="centered"
        />
      </div>
      
      {/* Content Section */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto w-full space-y-8">
            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center gap-3`}>
                <RadioIcon className="w-6 h-6 text-orange-500" />
                Our Mission
              </h2>
              <p className={`${theme.text.secondary} leading-relaxed`}>
                Telugu NRI Radio is dedicated to preserving and promoting Telugu culture, language, and traditions
                among Telugu communities worldwide. We serve as a bridge connecting Telugu hearts across continents,
                bringing the warmth of home to our diaspora through music, news, and engaging programs.
              </p>
            </div>

            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center gap-3`}>
                <InfoIcon className="w-6 h-6 text-blue-500" />
                Our Vision
              </h2>
              <p className={`${theme.text.secondary} leading-relaxed`}>
                To be the premier Telugu radio station globally, fostering unity and cultural pride among Telugu
                communities worldwide. We envision a world where every Telugu person, regardless of their location,
                feels connected to their roots and heritage through our programming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
                <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center gap-3`}>
                  <MusicIcon className="w-6 h-6 text-green-500" />
                  What We Offer
                </h2>
                <ul className={`${theme.text.secondary} space-y-2`}>
                  <li>• 24/7 Telugu music streaming</li>
                  <li>• Latest news from Telugu states</li>
                  <li>• Interactive talk shows</li>
                  <li>• Cultural programs</li>
                  <li>• Community discussions</li>
                  <li>• Festival celebrations</li>
                </ul>
              </div>

              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
                <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center gap-3`}>
                  <GlobeIcon className="w-6 h-6 text-blue-500" />
                  Global Reach
                </h2>
                <ul className={`${theme.text.secondary} space-y-2`}>
                  <li>• Listeners in USA, UK, Canada</li>
                  <li>• Australia, Germany, Dubai</li>
                  <li>• Singapore, Malaysia</li>
                  <li>• And many more countries</li>
                  <li>• Growing community of 100K+ listeners</li>
                  <li>• Active social media presence</li>
                </ul>
              </div>
            </div>

            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-6 flex items-center gap-3`}>
                <TeamIcon className="w-6 h-6 text-purple-500" />
                Our Team
              </h2>
              <p className={`${theme.text.secondary} mb-4`}>
                Our passionate team of radio jockeys, content creators, and technical experts work tirelessly
                to bring you the best Telugu programming. We are proud to have native Telugu speakers from
                different regions, ensuring authentic representation of our diverse culture.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto ${theme.bg.accent} rounded-full flex items-center justify-center mb-2`}>
                    <MicrophoneIcon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className={`${theme.text.primary} font-medium`}>Radio Jockeys</div>
                  <div className={`${theme.text.tertiary} text-sm`}>Experienced hosts</div>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto ${theme.bg.accent} rounded-full flex items-center justify-center mb-2`}>
                    <InfoIcon className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className={`${theme.text.primary} font-medium`}>Content Team</div>
                  <div className={`${theme.text.tertiary} text-sm`}>Creative writers</div>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto ${theme.bg.accent} rounded-full flex items-center justify-center mb-2`}>
                    <RadioIcon className="w-8 h-8 text-green-500" />
                  </div>
                  <div className={`${theme.text.primary} font-medium`}>Technical Team</div>
                  <div className={`${theme.text.tertiary} text-sm`}>24/7 broadcast support</div>
                </div>
              </div>
            </div>

            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center gap-3`}>
                <RadioIcon className="w-6 h-6 text-yellow-500" />
                Our Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <RadioIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className={`${theme.text.primary} font-medium`}>5+ Years Broadcasting</div>
                    <div className={`${theme.text.tertiary} text-sm`}>Consistent quality programming</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <TeamIcon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <div className={`${theme.text.primary} font-medium`}>100K+ Listeners</div>
                    <div className={`${theme.text.tertiary} text-sm`}>Growing global community</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <GlobeIcon className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <div className={`${theme.text.primary} font-medium`}>50+ Countries</div>
                    <div className={`${theme.text.tertiary} text-sm`}>Worldwide Telugu reach</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <MusicIcon className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <div className={`${theme.text.primary} font-medium`}>1000+ Hours</div>
                    <div className={`${theme.text.tertiary} text-sm`}>Monthly music content</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`text-center ${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center justify-center gap-3`}>
                <TeamIcon className="w-6 h-6 text-orange-500" />
                Thank You
              </h2>
              <p className={`${theme.text.secondary} leading-relaxed`}>
                We express our heartfelt gratitude to all our listeners, supporters, and the entire Telugu
                community worldwide. Your love and support inspire us to continue our mission of connecting
                Telugu hearts across the globe. Together, we keep our beautiful culture and language alive
                for future generations.
              </p>
            </div>
        </div>
        </div>
      
    </div>
  );
};

export default About;
