import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Mountain, 
  Waves, 
  GraduationCap, 
  Heart, 
  Briefcase, 
  Shield, 
  Wifi, 
  Truck, 
  Camera,
  HeadphonesIcon,
  Users,
  TrendingUp,
  Globe,
  ChevronRight,
  Play
} from 'lucide-react';
import Header from './common/Header';
import LanguageSelector from './common/LanguageSelector';

const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { icon: GraduationCap, name: t('education'), color: 'from-blue-500 to-blue-600' },
    { icon: Heart, name: t('healthcare'), color: 'from-red-500 to-red-600' },
    { icon: Briefcase, name: t('employment'), color: 'from-green-500 to-green-600' },
    { icon: Shield, name: t('safety'), color: 'from-purple-500 to-purple-600' },
    { icon: Wifi, name: t('connectivity'), color: 'from-indigo-500 to-indigo-600' },
    { icon: Truck, name: t('logistics'), color: 'from-yellow-500 to-yellow-600' },
    { icon: Camera, name: t('tourism'), color: 'from-pink-500 to-pink-600' },
    { icon: HeadphonesIcon, name: t('helpdesk'), color: 'from-teal-500 to-teal-600' },
  ];

  const stats = [
    { label: 'Communities Connected', value: '2,500+', icon: Users },
    { label: 'Services Provided', value: '50,000+', icon: TrendingUp },
    { label: 'Languages Supported', value: '8+', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Mountain className="h-12 w-12 text-orange-500 mr-3" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                {t('navchetna')}
              </h1>
              <Waves className="h-12 w-12 text-green-500 ml-3" />
            </div>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8 max-w-3xl mx-auto">
              {t('tagline')}
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('empowering_communities')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                {t('get_started')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                {t('learn_more')}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored for hill and coastal communities
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/login"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Access essential services and resources
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500/5 to-green-500/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Bridging the Digital Divide
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Navchetna leverages cutting-edge technology to bring essential services directly to remote hill and coastal communities, ensuring no one is left behind in India's digital transformation.
              </p>
              <ul className="space-y-4">
                {[
                  'Multi-language support for local communities',
                  'AI-powered assistance and guidance',
                  'Real-time government scheme updates',
                  'Mobile-first responsive design',
                  'Secure and trusted platform'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-xl flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">Community Dashboard</h4>
                      <p className="text-sm text-gray-600">Real-time insights</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Active Users</span>
                      <span className="font-semibold text-green-600">2,847</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Services Accessed Today</span>
                      <span className="font-semibold text-orange-600">1,234</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-green-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Empower Your Community?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of communities already using Navchetna to access essential services and opportunities.
          </p>
          <Link
            to="/login"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Start Your Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Mountain className="h-8 w-8 text-orange-500 mr-2" />
                <span className="text-2xl font-bold">{t('navchetna')}</span>
              </div>
              <p className="text-gray-400">
                Empowering hill and coastal communities through digital innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Education & Skills</li>
                <li>Healthcare</li>
                <li>Employment</li>
                <li>Women's Safety</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Community</li>
                <li>Contact Us</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Toll-Free: 1800-123-NAVC</li>
                <li>Email: help@navchetna.gov.in</li>
                <li>WhatsApp: +91 98765 43210</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Navchetna. Government of India Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;