import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import MyColors from './util/MyColors';
import MyFonts from './util/MyFonts';
import useCustomFonts from './util/fonts/useCustomFonts';
import Tabs from './components/Tabs';
import OnBoardingScreen from './screens/OnBoardingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import OtpScreen from './screens/OtpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();
  const [firstTimerUser, setFirstTimerUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default false or get from auth later

  useEffect(() => {
    checkOnBoardingStatus();
  }, []);

  const checkOnBoardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('hasOnboarded');
      setFirstTimerUser(value === null);
    } catch (error) {
      console.error('Error reading onboarding status:', error);
      setFirstTimerUser(true); // fallback
    }
  };

  if (!fontsLoaded || firstTimerUser === null) {
    return <View><Text>Loading app...</Text></View>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {firstTimerUser ? (
          <Stack.Screen name='OnBoarding' component={OnBoardingScreen} />
        ) : isLoggedIn ? (
          <Stack.Screen name='MainApp' component={Tabs} />
        ) : (
          <>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
          </>
        )}
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Otp' component={OtpScreen} />
        <Stack.Screen name='MainApp' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: MyColors.background,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: MyFonts.regular,
  },
});