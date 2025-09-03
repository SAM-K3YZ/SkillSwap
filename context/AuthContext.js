// context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // user login status
  const [firstTimerUser, setFirstTimerUser] = useState(null); // null = not checked yet
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkInitialStatus = async () => {
      try {
        const onboardingStatus = await AsyncStorage.getItem('@viewedOnboarding');
        const token = await AsyncStorage.getItem('@userToken');

        setFirstTimerUser(!onboardingStatus);
        setIsLoggedIn(!!token); // true if token exists
      } catch (err) {
        console.error('App status check failed:', err);
      } finally {
        setIsLoading(false);
      }
    };

    checkInitialStatus();
  }, []);

  const markOnboardingViewed = async () => {
    try {
      await AsyncStorage.setItem('@viewedOnboarding', 'true');
      setFirstTimerUser(false);
    } catch (err) {
      console.error('Failed to mark onboarding as viewed:', err);
    }
  };

  const login = async (token) => {
    try {
      await AsyncStorage.setItem('@userToken', token);
      setIsLoggedIn(true);
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@userToken');
      setIsLoggedIn(false);
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        firstTimerUser,
        markOnboardingViewed,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};