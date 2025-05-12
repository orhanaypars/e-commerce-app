import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';

// Define the types for our authentication state
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  loading: true,
});

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  // In a real app, this would call your backend API
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);

      // Validate inputs
      if (!email || !password) {
        showMessage({
          message: 'Please fill in all fields',
          type: 'danger',
        });
        return false;
      }

      // For demonstration, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real app, you would validate credentials with your backend
      // For now, let's simulate a successful login for any email/password
      const newUser = {
        id: 'user-' + Date.now(),
        username: email.split('@')[0],
        email,
      };

      // Save user to storage
      await AsyncStorage.setItem('user', JSON.stringify(newUser));
      
      // Update state
      setUser(newUser);
      setIsAuthenticated(true);
      
      showMessage({
        message: 'Login successful',
        type: 'success',
      });
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      showMessage({
        message: 'Login failed. Please try again.',
        type: 'danger',
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    try {
      setLoading(true);

      // Validate inputs
      if (!username || !email || !password) {
        showMessage({
          message: 'Please fill in all fields',
          type: 'danger',
        });
        return false;
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage({
          message: 'Please enter a valid email address',
          type: 'danger',
        });
        return false;
      }

      // Password validation (at least 6 characters)
      if (password.length < 6) {
        showMessage({
          message: 'Password must be at least 6 characters',
          type: 'danger',
        });
        return false;
      }

      // For demonstration, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real app, you would create a user in your backend
      const newUser = {
        id: 'user-' + Date.now(),
        username,
        email,
      };

      // Save user to storage
      await AsyncStorage.setItem('user', JSON.stringify(newUser));
      
      // Update state
      setUser(newUser);
      setIsAuthenticated(true);
      
      showMessage({
        message: 'Account created successfully',
        type: 'success',
      });
      
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      showMessage({
        message: 'Signup failed. Please try again.',
        type: 'danger',
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      setIsAuthenticated(false);
      showMessage({
        message: 'Logged out successfully',
        type: 'success',
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
