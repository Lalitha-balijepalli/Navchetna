import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mountain, User, LogOut, Settings, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isLandingPage = location.pathname === '/';

  return (
    <header className={`${isLandingPage ? 'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white shadow-lg'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Mountain className="h-8 w-8 text-orange-500 group-hover:text-orange-600 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
              {t('navchetna')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {user && (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {t('dashboard')}
                </Link>
                <Link
                  to="/services/education"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {t('services')}
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                  >
                    Admin
                  </Link>
                )}
              </>
            )}
            
            <LanguageSelector />

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-lg">
                  <User className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium text-gray-800">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                {t('login')}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-4">
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('dashboard')}
                  </Link>
                  <Link
                    to="/services/education"
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('services')}
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block text-gray-700 hover:text-orange-600 font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Admin
                    </Link>
                  )}
                </>
              )}
              
              <div className="py-2">
                <LanguageSelector />
              </div>

              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-lg">
                    <User className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-800">{user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('login')}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;