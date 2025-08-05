import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { 
  BarChart3, 
  Users, 
  Activity, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Globe,
  Settings,
  Filter,
  Search
} from 'lucide-react';
import Header from '../common/Header';

const AdminPanel: React.FC = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('overview');

  const kpiMetrics = [
    { 
      label: 'Total Active Users', 
      value: '24,567', 
      change: '+12.3%', 
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      label: 'Service Utilization', 
      value: '89.4%', 
      change: '+5.7%', 
      trend: 'up',
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      label: 'Communities Connected', 
      value: '2,847', 
      change: '+18.2%', 
      trend: 'up',
      icon: MapPin,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      label: 'Success Rate', 
      value: '94.2%', 
      change: '+2.1%', 
      trend: 'up',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    { 
      label: 'Response Time', 
      value: '2.3s', 
      change: '-15.6%', 
      trend: 'down',
      icon: Zap,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    { 
      label: 'Languages Supported', 
      value: '8', 
      change: '+1', 
      trend: 'up',
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const serviceStats = [
    { name: 'Education & Skills', users: 8432, growth: '+15%', status: 'growing', color: 'bg-blue-500' },
    { name: 'Healthcare', users: 6789, growth: '+22%', status: 'high-demand', color: 'bg-red-500' },
    { name: 'Employment', users: 5234, growth: '+18%', status: 'active', color: 'bg-green-500' },
    { name: 'Women\'s Safety', users: 3456, growth: '+25%', status: 'critical', color: 'bg-purple-500' },
    { name: 'Digital Connectivity', users: 7890, growth: '+12%', status: 'expanding', color: 'bg-indigo-500' },
    { name: 'Logistics', users: 4321, growth: '+20%', status: 'improving', color: 'bg-yellow-500' },
    { name: 'Tourism', users: 2876, growth: '+30%', status: 'seasonal', color: 'bg-pink-500' },
    { name: 'Helpdesk', users: 9876, growth: '+8%', status: 'stable', color: 'bg-teal-500' },
  ];

  const recentAlerts = [
    {
      type: 'high',
      title: 'Server Load Warning',
      message: 'Healthcare service experiencing high traffic',
      time: '5 minutes ago',
      status: 'unresolved'
    },
    {
      type: 'medium',
      title: 'New Region Added',
      message: 'Coastal Karnataka region successfully onboarded',
      time: '2 hours ago',
      status: 'resolved'
    },
    {
      type: 'low',
      title: 'Maintenance Scheduled',
      message: 'System maintenance planned for this weekend',
      time: '1 day ago',
      status: 'scheduled'
    }
  ];

  const topPerformingRegions = [
    { name: 'Himachal Pradesh Hills', users: 8432, services: 6, satisfaction: 96 },
    { name: 'Goa Coastal', users: 7123, services: 8, satisfaction: 94 },
    { name: 'Karnataka Coast', users: 6789, services: 7, satisfaction: 93 },
    { name: 'Kerala Hills', users: 5432, services: 5, satisfaction: 95 },
    { name: 'Odisha Coastal', users: 4321, services: 6, satisfaction: 92 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-6">
          {/* Admin Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-indigo-100 mb-4">
                  नमस्ते, {user?.name} • System Administrator
                </p>
                <div className="flex items-center text-indigo-100">
                  <Activity className="h-5 w-5 mr-2" />
                  <span>All systems operational</span>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex space-x-4">
                <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Export Data</span>
                </button>
                <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2">
                  <RefreshCw className="h-5 w-5" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* Time Period Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex space-x-2">
                {['week', 'month', 'quarter', 'year'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPeriod === period
                        ? 'bg-indigo-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search metrics..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-indigo-300 transition-colors">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">Filter</span>
                </button>
              </div>
            </div>
          </div>

          {/* KPI Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {kpiMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`p-3 rounded-xl ${metric.bgColor} mb-4 w-fit`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                <div className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service Performance */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Service Performance</h2>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    View Details
                  </button>
                </div>
                
                <div className="space-y-4">
                  {serviceStats.map((service, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-xl hover:border-indigo-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${service.color}`}></div>
                          <h3 className="font-semibold text-gray-800">{service.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service.status === 'critical' ? 'bg-red-100 text-red-700' :
                            service.status === 'high-demand' ? 'bg-orange-100 text-orange-700' :
                            service.status === 'growing' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {service.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-800">{service.users.toLocaleString()}</div>
                          <div className="text-sm text-green-600 font-medium">{service.growth}</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${service.color}`}
                          style={{ width: `${(service.users / 10000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Performing Regions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Top Performing Regions</h3>
                <div className="space-y-4">
                  {topPerformingRegions.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{region.name}</h4>
                          <p className="text-sm text-gray-600">{region.services} services active</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-800">{region.users.toLocaleString()}</div>
                        <div className="text-sm text-green-600">{region.satisfaction}% satisfaction</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Alerts */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">System Alerts</h3>
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                </div>
                <div className="space-y-3">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-800 text-sm">{alert.title}</h4>
                        <div className={`w-2 h-2 rounded-full ${
                          alert.type === 'high' ? 'bg-red-500' :
                          alert.type === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}></div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{alert.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{alert.time}</span>
                        <div className="flex items-center space-x-1">
                          {alert.status === 'resolved' && <CheckCircle className="h-3 w-3 text-green-500" />}
                          {alert.status === 'scheduled' && <Clock className="h-3 w-3 text-blue-500" />}
                          <span className={`text-xs ${
                            alert.status === 'resolved' ? 'text-green-600' :
                            alert.status === 'scheduled' ? 'text-blue-600' : 'text-red-600'
                          }`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all">
                    Add New Region
                  </button>
                  <button className="w-full bg-green-50 text-green-600 p-3 rounded-lg font-medium hover:bg-green-100 transition-colors">
                    Generate Report
                  </button>
                  <button className="w-full bg-blue-50 text-blue-600 p-3 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                    User Management
                  </button>
                  <button className="w-full bg-orange-50 text-orange-600 p-3 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                    System Settings
                  </button>
                </div>
              </div>

              {/* System Health */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold">System Health</h3>
                    <p className="text-green-100 text-sm">All services operational</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-200" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uptime</span>
                    <span className="font-medium">99.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Response Time</span>
                    <span className="font-medium">142ms</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Users</span>
                    <span className="font-medium">24,567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;