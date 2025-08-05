import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mountain, User, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';
import Header from '../common/Header';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'citizen' | 'admin' | 'facilitator'>('citizen');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password, role);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please check your email, password, and role.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const demoCredentials = [
    { role: 'admin', email: 'admin@navchetna.gov.in', password: 'admin123', name: 'Admin Access' },
    { role: 'citizen', email: 'citizen@example.com', password: 'citizen123', name: 'Citizen Access' },
    { role: 'facilitator', email: 'facilitator@navchetna.org', password: 'facilitator123', name: 'Facilitator Access' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Welcome */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Mountain className="h-12 w-12 text-orange-500 mr-3" />
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                    {t('welcome')}
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8">
                  {t('empowering_communities')}
                </p>
                
                {/* Demo Credentials */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Demo Credentials</h3>
                  <div className="space-y-3">
                    {demoCredentials.map((cred, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="font-medium text-gray-800 mb-1">{cred.name}</div>
                        <div className="text-sm text-gray-600">
                          <div>Email: {cred.email}</div>
                          <div>Password: {cred.password}</div>
                          <div className="capitalize">Role: {cred.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('signin')}</h2>
                  <p className="text-gray-600">Access your Navchetna account</p>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-red-700 text-sm">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Role Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Role
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['citizen', 'admin', 'facilitator'].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRole(r as any)}
                          className={`p-3 text-sm font-medium rounded-xl border-2 transition-all duration-200 ${
                            role === r
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-200 bg-white text-gray-600 hover:border-orange-300'
                          }`}
                        >
                          {t(r)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('email')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('password')}
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Signing In...
                      </div>
                    ) : (
                      t('signin')
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    Need help? Contact our support team at{' '}
                    <a href="tel:1800-123-NAVC" className="text-orange-600 hover:text-orange-700 font-medium">
                      1800-123-NAVC
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;