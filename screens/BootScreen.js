import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';

export default function BootScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Delay then route user
    const timeout = setTimeout(async () => {
      try {
        const onboarded = await AsyncStorage.getItem('hasOnboarded');
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn'); // optional future use

        if (!onboarded) {
          navigation.replace('OnBoarding');
        } else if (isLoggedIn === 'true') {
          navigation.replace('MainApp');
        } else {
          navigation.replace('SignIn');
        }
      } catch (err) {
        console.error('Boot logic error:', err);
        navigation.replace('SignIn');
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/splash-icon.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Welcome to SkillSwap
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.background, // use your theme color
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: MyFonts.medium,
    color: MyColors.textPrimary,
  },
});