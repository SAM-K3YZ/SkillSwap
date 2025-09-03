// hooks/useCustomFonts.js
import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'Outfit-Regular': require('./Outfit-Regular.ttf'),
    'Outfit-Bold': require('./Outfit-Bold.ttf'),
    'Outfit-SemiBold': require('./Outfit-SemiBold.ttf'),
    'Outfit-Medium': require('./Outfit-Medium.ttf'),
    'Outfit-Light': require('./Outfit-Light.ttf'),
    'Outfit-Thin': require('./Outfit-Thin.ttf'),
    'Outfit-ExtraBold': require('./Outfit-ExtraBold.ttf'),
    'Outfit-Black': require('./Outfit-Black.ttf'),
    'Outfit-ExtraLight': require('./Outfit-ExtraLight.ttf'),
  });

  return fontsLoaded;
}
