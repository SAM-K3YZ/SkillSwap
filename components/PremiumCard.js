import { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { PremiumData } from "../util/HomeData";

import MyColors from "../util/MyColors";
import MyFont from "../util/MyFonts";

const PremiumCard = ({ item, isActive, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: isActive ? 1.1 : 0.9, // active grows, others shrink
      useNativeDriver: true,
      friction: 6,
    }).start();
  }, [isActive]);

  return (
    <Pressable onPress={onPress} style={{ marginHorizontal: 6 }}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ scale }],
            zIndex: isActive ? 10 : 1, //active card comes to front
            elevation: isActive ? 15 : 5, //Android layering support
          },
          isActive && styles.activeCard,
        ]}
      >
        {/* Top Badge */}
        {item.per && (
          <View style={styles.top}>
            <Text style={styles.savePer}>Save {item.per}%</Text>
          </View>
        )}

        {/* Bottom Info */}
        <View style={styles.bottom}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.monthNum}>{item.month}</Text>
            <Text style={styles.monthTxt}>Month(s)</Text>
          </View>
          <Text style={[styles.price, isActive && styles.activePrice]}>
            ${item.price}/mt
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default function PremiumRow() {
  const [activeIndex, setActiveIndex] = useState(1); // default to middle card
  const activeItem = PremiumData[activeIndex]; // get the selected card

  return (
    <View style={styles.container}>
      {/* Cards */}
      <View style={styles.row}>
        {PremiumData.map((item, index) => (
          <PremiumCard
            key={index}
            item={item}
            isActive={activeIndex === index}
            onPress={() => setActiveIndex(index)}
          />
        ))}
      </View>

      {/* Button */}
      <View style={styles.btn}>
        <Pressable>
          <Text style={styles.btnText}>
            Get {activeItem.month} Month(s) / ${activeItem.price}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  card: {
    position: "relative",
    height: 180,
    width: 100,
    borderRadius: 15,
    backgroundColor: MyColors.surface,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    shadowColor: MyColors.textSecondary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  btn: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 15,
    marginVertical: 20,
    backgroundColor: MyColors.secondary,
  },
  btnText: {
    fontFamily: MyFont.medium,
    fontSize: 16,
    color: MyColors.textPrimary,
  },
  activeCard: {
    width: 120,
    borderWidth: 2,
    borderColor: MyColors.secondary,
  },
  top: {
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: MyColors.secondary,
  },
  savePer: {
    color: MyColors.textPrimary,
    fontSize: 12,
    fontFamily: MyFont.bold,
    textAlign: "center",
  },
  bottom: {
    alignItems: "center",
    marginBottom: 8,
  },
  monthNum: {
    fontSize: 22,
    fontFamily: MyFont.bold,
    color: MyColors.textPrimary,
  },
  monthTxt: {
    fontSize: 12,
    fontFamily: MyFont.regular,
    color: MyColors.textSecondary,
  },
  price: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: MyFont.medium,
    color: MyColors.textSecondary,
  },
  activePrice: {
    color: MyColors.secondary,
    fontFamily: MyFont.bold,
  },
});
