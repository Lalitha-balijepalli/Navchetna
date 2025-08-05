import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  GraduationCap,
  Heart,
  Briefcase,
  Shield,
  Wifi,
  Truck,
  Camera,
  HeadphonesIcon,
  ArrowLeft,
  Search,
  Filter,
  MapPin,
  Calendar,
  Users,
  Star,
  Phone,
  ExternalLink,
  Download,
  Share2
} from 'lucide-react';
import Header from '../common/Header';

const ServiceModule: React.FC = () => {
  const { serviceId } = useParams();
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceConfig = {
    education: {
      icon: GraduationCap,
      name: t('education'),
      color: 'blue',
      bgGradient: 'from-blue-500 to-blue-600',
      items: [
        {
          title: 'Digital Literacy Program',
          description: 'Learn basic computer skills and internet usage',
          location: 'Manali Community Center',
          date: '2025-01-15',
          participants: 25,
          rating: 4.8,
          status: 'enrollment-open',
          contact: '+91 9876543210'
        },
        {
          title: 'Skill Development Workshop - Handicrafts',
          description: 'Traditional craft skills with modern marketing techniques',
          location: 'Shimla Hills Cooperative',
          date: '2025-01-20',
          participants: 30,
          rating: 4.9,
          status: 'starting-soon',
          contact: '+91 9876543211'
        },
        {
          title: 'English Language Classes',
          description: 'Conversational English for tourism and business',
          location: 'Goa Coastal Center',
          date: '2025-01-10',
          participants: 40,
          rating: 4.7,
          status: 'ongoing',
          contact: '+91 9876543212'
        },
      ]
    },
    healthcare: {
      icon: Heart,
      name: t('healthcare'),
      color: 'red',
      bgGradient: 'from-red-500 to-red-600',
      items: [
        {
          title: 'Telemedicine Consultation',
          description: 'Connect with certified doctors via video call',
          location: 'Remote Consultation',
          date: 'Available 24/7',
          participants: '500+ monthly',
          rating: 4.9,
          status: 'available',
          contact: '1800-HEALTH'
        },
        {
          title: 'Mobile Health Clinic',
          description: 'Regular health checkups and vaccination drives',
          location: 'Rotating villages',
          date: 'Weekly schedule',
          participants: '100+ per visit',
          rating: 4.8,
          status: 'active',
          contact: '+91 9876543213'
        },
        {
          title: 'Maternal Health Program',
          description: 'Prenatal and postnatal care for expecting mothers',
          location: 'Regional Health Centers',
          date: 'Ongoing',
          participants: '200+ mothers',
          rating: 4.9,
          status: 'enrollment-open',
          contact: '+91 9876543214'
        },
      ]
    },
    employment: {
      icon: Briefcase,
      name: t('employment'),
      color: 'green',
      bgGradient: 'from-green-500 to-green-600',
      items: [
        {
          title: 'Eco-Tourism Guide',
          description: 'Lead nature walks and cultural tours for visitors',
          location: 'Hill Stations',
          date: 'Apply by Jan 25',
          participants: '5 positions',
          rating: 4.7,
          status: 'hiring',
          contact: '+91 9876543215'
        },
        {
          title: 'Organic Farming Coordinator',
          description: 'Manage sustainable farming initiatives',
          location: 'Coastal Villages',
          date: 'Apply by Jan 30',
          participants: '3 positions',
          rating: 4.8,
          status: 'hiring',
          contact: '+91 9876543216'
        },
        {
          title: 'Digital Marketing Specialist',
          description: 'Promote local products and services online',
          location: 'Remote/Hybrid',
          date: 'Apply by Feb 5',
          participants: '2 positions',
          rating: 4.6,
          status: 'new',
          contact: '+91 9876543217'
        },
      ]
    },
    safety: {
      icon: Shield,
      name: t('safety'),
      color: 'purple',
      bgGradient: 'from-purple-500 to-purple-600',
      items: [
        {
          title: '24/7 Emergency Helpline',
          description: 'Immediate assistance for safety concerns',
          location: 'All regions',
          date: 'Always available',
          participants: '1000+ calls/month',
          rating: 4.9,
          status: 'active',
          contact: '108'
        },
        {
          title: 'Women Safety App',
          description: 'GPS tracking and emergency alerts',
          location: 'Mobile app',
          date: 'Download now',
          participants: '5000+ users',
          rating: 4.8,
          status: 'available',
          contact: 'App Store'
        },
        {
          title: 'Self Defense Training',
          description: 'Physical and mental preparedness workshops',
          location: 'Community Centers',
          date: 'Monthly sessions',
          participants: '50+ per session',
          rating: 4.9,
          status: 'enrollment-open',
          contact: '+91 9876543218'
        },
      ]
    },
    connectivity: {
      icon: Wifi,
      name: t('connectivity'),
      color: 'indigo',
      bgGradient: 'from-indigo-500 to-indigo-600',
      items: [
        {
          title: 'Free WiFi Hotspots',
          description: 'High-speed internet access points',
          location: '150+ locations',
          date: 'Available 24/7',
          participants: '2000+ users',
          rating: 4.5,
          status: 'expanding',
          contact: '+91 9876543219'
        },
        {
          title: 'Digital Payment Training',
          description: 'Learn UPI and digital transaction methods',
          location: 'Village Centers',
          date: 'Weekly workshops',
          participants: '100+ per session',
          rating: 4.8,
          status: 'ongoing',
          contact: '+91 9876543220'
        },
        {
          title: 'Internet for All',
          description: 'Subsidized broadband connections',
          location: 'Rural households',
          date: 'Apply anytime',
          participants: '3000+ connected',
          rating: 4.7,
          status: 'enrollment-open',
          contact: '+91 9876543221'
        },
      ]
    },
    logistics: {
      icon: Truck,
      name: t('logistics'),
      color: 'yellow',
      bgGradient: 'from-yellow-500 to-yellow-600',
      items: [
        {
          title: 'Farmer Producer Organization',
          description: 'Direct market access for agricultural products',
          location: 'Regional hubs',
          date: 'Registration open',
          participants: '500+ farmers',
          rating: 4.8,
          status: 'enrollment-open',
          contact: '+91 9876543222'
        },
        {
          title: 'Cold Storage Network',
          description: 'Preserve and store perishable goods',
          location: '20+ facilities',
          date: 'Available year-round',
          participants: '200+ businesses',
          rating: 4.6,
          status: 'available',
          contact: '+91 9876543223'
        },
        {
          title: 'Transportation Cooperative',
          description: 'Shared logistics for small businesses',
          location: 'Hill and coastal routes',
          date: 'Join anytime',
          participants: '100+ members',
          rating: 4.7,
          status: 'growing',
          contact: '+91 9876543224'
        },
      ]
    },
    tourism: {
      icon: Camera,
      name: t('tourism'),
      color: 'pink',
      bgGradient: 'from-pink-500 to-pink-600',
      items: [
        {
          title: 'Homestay Network',
          description: 'Authentic local accommodation experiences',
          location: 'Hill and coastal villages',
          date: 'Year-round bookings',
          participants: '200+ properties',
          rating: 4.8,
          status: 'booking-open',
          contact: '+91 9876543225'
        },
        {
          title: 'Cultural Heritage Tours',
          description: 'Guided tours showcasing local traditions',
          location: 'Historical sites',
          date: 'Daily tours',
          participants: '50+ guides',
          rating: 4.9,
          status: 'available',
          contact: '+91 9876543226'
        },
        {
          title: 'Adventure Sports Hub',
          description: 'Trekking, water sports, and outdoor activities',
          location: 'Natural locations',
          date: 'Seasonal availability',
          participants: '30+ activities',
          rating: 4.7,
          status: 'seasonal',
          contact: '+91 9876543227'
        },
      ]
    },
    helpdesk: {
      icon: HeadphonesIcon,
      name: t('helpdesk'),
      color: 'teal',
      bgGradient: 'from-teal-500 to-teal-600',
      items: [
        {
          title: 'Multi-language Support',
          description: 'Get help in your preferred language',
          location: 'Phone and chat',
          date: '24/7 availability',
          participants: '1000+ queries/day',
          rating: 4.9,
          status: 'active',
          contact: '1800-NAVCHETNA'
        },
        {
          title: 'Government Scheme Guidance',
          description: 'Navigate and apply for various schemes',
          location: 'Online and offline',
          date: 'Always available',
          participants: '500+ applications/week',
          rating: 4.8,
          status: 'available',
          contact: '+91 9876543228'
        },
        {
          title: 'Technical Support',
          description: 'Help with digital services and apps',
          location: 'Remote assistance',
          date: 'Business hours',
          participants: '200+ resolved/day',
          rating: 4.7,
          status: 'available',
          contact: '+91 9876543229'
        },
      ]
    },
  };

  const currentService = serviceConfig[serviceId as keyof typeof serviceConfig];

  if (!currentService) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Service not found</h1>
          <Link to="/dashboard" className="text-orange-600 hover:text-orange-700 mt-4 inline-block">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const statusColors = {
    'enrollment-open': 'bg-green-100 text-green-800',
    'starting-soon': 'bg-yellow-100 text-yellow-800',
    'ongoing': 'bg-blue-100 text-blue-800',
    'available': 'bg-green-100 text-green-800',
    'active': 'bg-green-100 text-green-800',
    'hiring': 'bg-purple-100 text-purple-800',
    'new': 'bg-red-100 text-red-800',
    'expanding': 'bg-blue-100 text-blue-800',
    'growing': 'bg-indigo-100 text-indigo-800',
    'booking-open': 'bg-pink-100 text-pink-800',
    'seasonal': 'bg-orange-100 text-orange-800',
  };

  const filteredItems = currentService.items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className={`bg-gradient-to-r ${currentService.bgGradient} rounded-2xl p-8 text-white mb-8`}>
            <div className="flex items-center mb-6">
              <Link 
                to="/dashboard" 
                className="mr-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <currentService.icon className="h-10 w-10 mr-4" />
              <div>
                <h1 className="text-3xl font-bold">{currentService.name}</h1>
                <p className="text-white/80 mt-2">Discover programs and services in your area</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold">{currentService.items.length}</div>
                <div className="text-white/80">Active Programs</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-white/80">Beneficiaries</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search programs and services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:border-orange-300 transition-colors">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-3 bg-orange-50 text-orange-600 rounded-xl hover:bg-orange-100 transition-colors">
                  <Download className="h-5 w-5" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          {/* Service Items Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[item.status as keyof typeof statusColors]}`}>
                      {item.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{item.participants}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      <span>{item.rating}/5.0 rating</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a 
                      href={`tel:${item.contact}`}
                      className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Contact</span>
                    </a>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors flex items-center space-x-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>Apply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceModule;