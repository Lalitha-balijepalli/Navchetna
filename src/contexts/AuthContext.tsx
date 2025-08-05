import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'admin' | 'facilitator';
  location?: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers: Record<string, { password: string; user: User }> = {
  'admin@navchetna.gov.in': {
    password: 'admin123',
    user: {
      id: '1',
      name: 'राज कुमार शर्मा',
      email: 'admin@navchetna.gov.in',
      role: 'admin',
      location: 'Shimla, Himachal Pradesh'
    }
  },
  'citizen@example.com': {
    password: 'citizen123',
    user: {
      id: '2',
      name: 'सुनीता देवी',
      email: 'citizen@example.com',
      role: 'citizen',
      location: 'Manali, Himachal Pradesh',
      phone: '+91 9876543210'
    }
  },
  'facilitator@navchetna.org': {
    password: 'facilitator123',
    user: {
      id: '3',
      name: 'अमित पटेल',
      email: 'facilitator@navchetna.org',
      role: 'facilitator',
      location: 'Goa Coastal Region'
    }
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('navchetna-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    const mockUser = mockUsers[email];
    
    if (mockUser && mockUser.password === password && mockUser.user.role === role) {
      setUser(mockUser.user);
      localStorage.setItem('navchetna-user', JSON.stringify(mockUser.user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('navchetna-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};