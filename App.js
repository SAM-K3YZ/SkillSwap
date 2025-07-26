import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyColors from './util/MyColors';
import MyFonts from './util/MyFonts';
import useCustomFonts from './util/fonts/useCustomFonts';

import Tabs from './components/Tabs';
import BootScreen from './screens/BootScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import OtpScreen from './screens/OtpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import DateOfBirthScreen from './screens/DateOfBirthScreen';
import ProfessionScreen from './screens/ProfessionsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const onboarded = await AsyncStorage.getItem('hasOnboarded');
        // TODO: Replace with real auth check
        const userIsLoggedIn = false;
        if (!onboarded) {
          setInitialRoute('BootScreen');
        } else if (userIsLoggedIn) {
          setInitialRoute('MainApp');
        } else {
          setInitialRoute('SignIn');
        }
      } catch (err) {
        console.error('Error loading app state:', err);
        setInitialRoute('SignIn');
      }
    };
    init();
  }, []);

  if (!fontsLoaded || initialRoute === null) {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: MyFonts.regular }}>Loading app...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="BootScreen" component={BootScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="DOB" component={DateOfBirthScreen} />
        <Stack.Screen name="Profession" component={ProfessionScreen} />
        <Stack.Screen name="MainApp" component={Tabs} />
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
  },
});
