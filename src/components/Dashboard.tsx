import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
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
  Award,
  Calendar,
  Bell,
  MapPin,
  Activity,
  BarChart3,
  Clock
} from 'lucide-react';
import Header from './common/Header';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const services = [
    { 
      id: 'education', 
      icon: GraduationCap, 
      name: t('education'), 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      count: '1,234',
      description: 'Students enrolled this month'
    },
    { 
      id: 'healthcare', 
      icon: Heart, 
      name: t('healthcare'), 
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      count: '856',
      description: 'Health consultations completed'
    },
    { 
      id: 'employment', 
      icon: Briefcase, 
      name: t('employment'), 
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      count: '432',
      description: 'Job opportunities posted'
    },
    { 
      id: 'safety', 
      icon: Shield, 
      name: t('safety'), 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      count: '24/7',
      description: 'Emergency helpline active'
    },
    { 
      id: 'connectivity', 
      icon: Wifi, 
      name: t('connectivity'), 
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      count: '89%',
      description: 'Villages connected'
    },
    { 
      id: 'logistics', 
      icon: Truck, 
      name: t('logistics'), 
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      count: '567',
      description: 'Supply chain connections'
    },
    { 
      id: 'tourism', 
      icon: Camera, 
      name: t('tourism'), 
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      count: '3,421',
      description: 'Tourism promotions active'
    },
    { 
      id: 'helpdesk', 
      icon: HeadphonesIcon, 
      name: t('helpdesk'), 
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      count: '98%',
      description: 'Query resolution rate'
    },
  ];

  const quickStats = [
    { label: 'Total Users', value: '24,567', icon: Users, change: '+12%', color: 'text-blue-600' },
    { label: 'Services Used', value: '89,432', icon: Activity, change: '+8%', color: 'text-green-600' },
    { label: 'Success Rate', value: '94.2%', icon: Award, change: '+2.1%', color: 'text-purple-600' },
    { label: 'Response Time', value: '2.3s', icon: Clock, change: '-15%', color: 'text-orange-600' },
  ];

  const recentActivities = [
    { 
      title: 'New Healthcare Center Registered', 
      location: 'Manali, HP', 
      time: '2 hours ago',
      type: 'healthcare',
      icon: Heart,
      color: 'text-red-500'
    },
    { 
      title: 'Skill Development Program Launched', 
      location: 'Goa Coastal Region', 
      time: '4 hours ago',
      type: 'education',
      icon: GraduationCap,
      color: 'text-blue-500'
    },
    { 
      title: 'Emergency Alert Resolved', 
      location: 'Shimla Hills', 
      time: '6 hours ago',
      type: 'safety',
      icon: Shield,
      color: 'text-purple-500'
    },
    { 
      title: 'New Job Posting: Eco-Tourism Guide', 
      location: 'Coastal Karnataka', 
      time: '8 hours ago',
      type: 'employment',
      icon: Briefcase,
      color: 'text-green-500'
    },
  ];

  const notifications = [
    { 
      title: 'PM Kisan Scheme Registration Open', 
      message: 'Apply for direct benefit transfer by March 31st',
      priority: 'high',
      time: '1 hour ago'
    },
    { 
      title: 'Digital Literacy Workshop', 
      message: 'Free training session scheduled for this weekend',
      priority: 'medium',
      time: '3 hours ago'
    },
    { 
      title: 'Weather Alert', 
      message: 'Heavy rainfall expected in coastal areas',
      priority: 'high',
      time: '5 hours ago'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">
                    नमस्ते, {user?.name}!
                  </h1>
                  <p className="text-lg text-orange-100 mb-4">
                    Welcome to your Navchetna dashboard
                  </p>
                  <div className="flex items-center text-orange-100">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{user?.location}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-2xl font-bold">{new Date().toLocaleDateString('hi-IN')}</div>
                    <div className="text-orange-100">Today's Date</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Services Grid */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Services</h2>
                  <div className="flex space-x-2">
                    {['week', 'month', 'year'].map((period) => (
                      <button
                        key={period}
                        onClick={() => setSelectedPeriod(period)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedPeriod === period
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {period.charAt(0).toUpperCase() + period.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="group p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-xl ${service.bgColor} group-hover:scale-110 transition-transform`}>
                          <service.icon className={`h-6 w-6 ${service.textColor}`} />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-800">{service.count}</div>
                          <div className="text-xs text-gray-500">This month</div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="p-2 rounded-lg bg-gray-100">
                        <activity.icon className={`h-5 w-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{activity.title}</h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{activity.location}</span>
                          <span className="mx-2">•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
                  <Bell className="h-5 w-5 text-gray-400" />
                </div>
                <div className="space-y-3">
                  {notifications.map((notification, index) => (
                    <div key={index} className="p-3 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-800 text-sm">{notification.title}</h4>
                        <div className={`w-2 h-2 rounded-full ${
                          notification.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{notification.message}</p>
                      <div className="text-xs text-gray-500">{notification.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all">
                    Apply for Scheme
                  </button>
                  <button className="w-full bg-green-50 text-green-600 p-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
                    Schedule Health Checkup
                  </button>
                  <button className="w-full bg-blue-50 text-blue-600 p-3 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                    Find Job Opportunities
                  </button>
                  <button className="w-full bg-purple-50 text-purple-600 p-3 rounded-lg font-medium hover:bg-purple-100 transition-colors">
                    Emergency Helpline
                  </button>
                </div>
              </div>

              {/* Weather Widget */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold">Weather</h3>
                    <p className="text-blue-100 text-sm">{user?.location}</p>
                  </div>
                  <div className="text-3xl">⛅</div>
                </div>
                <div className="text-2xl font-bold mb-2">22°C</div>
                <div className="text-blue-100 text-sm">
                  Partly cloudy • Humidity: 65%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;