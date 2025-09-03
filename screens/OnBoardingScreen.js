import { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import onboardingData from '../util/onBoardingData';
import Ionicons from '@expo/vector-icons/Ionicons';

import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = async () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
        navigation.replace('SignUp');
      } catch (e) {
        console.log('Error storing onboarding state:', e);
      }
    }
  };

  const handleSkip = () => {
    flatListRef.current.scrollToIndex({ index: onboardingData.length - 1 });
    setCurrentIndex(onboardingData.length - 1);
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    const index = viewableItems[0]?.index ?? 0;
    setCurrentIndex(index);

    if (index === onboardingData.length - 1) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }).current;

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      {currentIndex < onboardingData.length - 1 && (
        <Pressable style={styles.skipArea} onPress={handleSkip}>
          <View style={styles.skipBtnContainer}>
            <Text style={styles.skipBtn}>Skip</Text>
            <Ionicons
              name="chevron-forward"
              size={24}
              color={MyColors.primary}
              style={styles.skipIcon}
            />
          </View>
        </Pressable>
      )}

      {/* Slides */}
      <FlatList
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ref={flatListRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {onboardingData.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [(i - 1) * width, i * width, (i + 1) * width],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
        })}
      </View>

      {/* Next / Get Started Button */}
      {currentIndex === onboardingData.length - 1 ? (
        <Animated.View style={[styles.nextButton, { opacity: fadeAnim }]}>
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.nextText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingRight: 20,
    alignSelf: 'flex-end',
  },
  skipBtn: {
    color: MyColors.primary,
    fontSize: 24,
    fontFamily: MyFonts.semiBold,
    marginRight: 5,
  },
  skipIcon: {
    marginTop: 2,
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    margin: 8,
  },
  nextButton: {
    backgroundColor: MyColors.primary,
    paddingVertical: 14,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: MyFonts.medium,
  },
});