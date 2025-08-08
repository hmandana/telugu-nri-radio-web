import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Banner from '../components/Banner';
import { PhoneIcon, MobileIcon, IndiaFlagIcon, USAFlagIcon, UKFlagIcon, ClockIcon, TeamIcon } from '../icons/index.jsx';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg.primary} min-h-screen`}>
      {/* Banner Section */}
      <div className="px-4 py-16">
        <Banner
          title="Get In Touch"
          description="Connect with Telugu NRI Radio - we'd love to hear from you!"
          badge={{
            text: "CONTACT US",
            leftIcon: PhoneIcon,
            rightIcon: PhoneIcon
          }}
          backgroundIntensity="strong"
        />
      </div>
      
      {/* Content Section */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
                <h2 className={`${theme.text.primary} text-xl font-semibold mb-6 flex items-center gap-3`}>
                  <MobileIcon className="w-6 h-6" />
                  Contact Numbers
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <IndiaFlagIcon className="w-6 h-4" />
                    </div>
                    <div>
                      <div className={`${theme.text.primary} font-medium`}>India</div>
                      <div className={`${theme.text.secondary}`}>+91-9705222005</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <USAFlagIcon className="w-6 h-4" />
                    </div>
                    <div>
                      <div className={`${theme.text.primary} font-medium`}>USA</div>
                      <div className={`${theme.text.secondary}`}>+1-9197012005</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <UKFlagIcon className="w-6 h-4" />
                    </div>
                    <div>
                      <div className={`${theme.text.primary} font-medium`}>UK</div>
                      <div className={`${theme.text.secondary}`}>+44-1158882005</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
                <h2 className={`${theme.text.primary} text-xl font-semibold mb-6 flex items-center gap-3`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.4 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12H5v-2h8v2zm3-4H5V8h11v2z" />
                  </svg>
                  Messaging & Calls
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                      </svg>
                    </div>
                    <div>
                      <div className={`${theme.text.primary} font-medium`}>WhatsApp</div>
                      <a href="https://wa.me/919705222005" target="_blank" rel="noopener noreferrer"
                        className={`${theme.text.accent} hover:opacity-80 transition-colors`}>
                        +91-9705222005
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.5 14l8.5-8.5L19.5 4l-7 7L5.5 4L4 5.5l8.5 8.5zm-3 1L12 17.5L14.5 15L23 6.5L21.5 5l-7 7L7.5 5L6 6.5l3 3zm0 0l-1.5 7l7-1.5-5.5-5.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className={`${theme.text.primary} font-medium`}>Skype</div>
                      <a href="skype:telugunriradio?chat" target="_blank" rel="noopener noreferrer"
                        className={`${theme.text.accent} hover:opacity-80 transition-colors`}>
                        telugunriradio
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <div className={`${theme.text.primary} font-medium`}>Email</div>
                      <a href="mailto:info@telugunriradio.com"
                        className={`${theme.text.accent} hover:opacity-80 transition-colors`}>
                        info@telugunriradio.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 mb-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-6 flex items-center gap-3`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.232 16.987c0-.467-.062-.93-.184-1.378h2.647c.767 0 1.567-.247 2.203-.247 1.739 0 2.415.43 2.415 1.179 0 1.12-1.307 1.566-3.415 1.566h-1.431c-.43 0-.43-.43-.43-.43s0-.43.43-.43h1.431c1.492 0 2.538-.184 2.538-.862 0-.369-.369-.553-1.046-.553-.615 0-1.292.184-1.846.184H9.509c-.43 0-.43-.43-.43-.43s0-.43.43-.43h.723zm7.385-9.23c-1.693 0-3.077 1.384-3.077 3.077s1.384 3.077 3.077 3.077 3.077-1.384 3.077-3.077-1.384-3.077-3.077-3.077z" />
                </svg>
                Social Media
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a href="https://www.facebook.com/TeluguNriRadio/"
                  target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${theme.text.secondary} hover:text-blue-400 transition-colors ${theme.bg.tertiary} rounded-lg p-4 ${theme.bg.cardHover}`}>
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <div className={`${theme.text.primary} font-medium`}>Facebook</div>
                    <div className={`text-sm ${theme.text.tertiary}`}>Follow us for updates</div>
                  </div>
                </a>
                <a href="https://x.com/TeluguNriRadio/"
                  target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${theme.text.secondary} hover:text-gray-300 transition-colors ${theme.bg.tertiary} rounded-lg p-4 ${theme.bg.cardHover}`}>
                  <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div>
                    <div className={`${theme.text.primary} font-medium`}>X (Twitter)</div>
                    <div className={`text-sm ${theme.text.tertiary}`}>Get real-time updates</div>
                  </div>
                </a>
                <a href="https://www.youtube.com/channel/UCJoUiTK6OHcHK6sRuZYPPtQ?sub_confirmation=1"
                  target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${theme.text.secondary} hover:text-red-500 transition-colors ${theme.bg.tertiary} rounded-lg p-4 ${theme.bg.cardHover}`}>
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <div className={`${theme.text.primary} font-medium`}>YouTube</div>
                    <div className={`text-sm ${theme.text.tertiary}`}>Subscribe to our channel</div>
                  </div>
                </a>
              </div>
            </div>

            <div className={`${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-6 flex items-center gap-3`}>
                <ClockIcon className="w-6 h-6" />
                Contact Hours
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className={`${theme.text.primary} font-medium mb-3`}>Live Show Hours</h3>
                  <div className={`space-y-2 text-sm ${theme.text.secondary}`}>
                    <div>Monday - Friday: 6:00 AM - 12:00 AM</div>
                    <div>Saturday - Sunday: 24/7 Live</div>
                  </div>
                </div>
                <div>
                  <h3 className={`${theme.text.primary} font-medium mb-3`}>Office Hours</h3>
                  <div className={`space-y-2 text-sm ${theme.text.secondary}`}>
                    <div>Monday - Friday: 9:00 AM - 6:00 PM IST</div>
                    <div>Saturday: 10:00 AM - 4:00 PM IST</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-8 text-center ${theme.bg.card} backdrop-blur-lg rounded-xl p-8 ${theme.border.light} border`}>
              <h2 className={`${theme.text.primary} text-xl font-semibold mb-4 flex items-center justify-center gap-3`}>
                <TeamIcon className="w-6 h-6" />
                Join Our Team
              </h2>
              <p className={`${theme.text.secondary} mb-4`}>
                Interested in becoming a radio jockey or contributing to our programs?
              </p>
              <div className={`${theme.text.accent} font-medium`}>
                Contact us through any of the above methods to learn more!
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
