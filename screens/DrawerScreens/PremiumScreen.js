import { Image, StyleSheet, Text, View } from "react-native";

import MyColors from "./../../util/MyColors";
import MyFont from "./../../util/MyFonts";
import PremiumCard from "../../components/PremiumCard";

function PremiumSCreen() {
  const breakTextByWords = (text, wordsPerLine) => {
    const words = text.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      result += words[i];
      if ((i + 1) % wordsPerLine === 0 && i !== words.length - 1) {
        result += "\n";
      } else if (i !== words.length - 1) {
        result += " ";
      }
    }
    return result;
  };

  const originalText =
    "Billing for your subscription will occur automatically according to your selected billing cycle, ensuring uninterrupted access to our services.";
  const formatedText = breakTextByWords(originalText, 6);

  return (
    <View style={styles.container}>
      <View style={styles.imageBg}>
        <Image source={require("./../../assets/Memoji.png")} />
        <Text style={styles.upgradeTxt}>Upgrade to Premium </Text>
        <Text style={styles.unlockTxt}>
          Unlock all the features with Premium
        </Text>
      </View>

      <View style={styles.premiumDetailsArea}>
        <PremiumCard />
      </View>

      <View>
        <Text style={styles.billingQues}>When will I be billed?</Text>
      </View>

      <View>
        <Text style={styles.billingTxt}>{formatedText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBg: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 15,
    //backgroundColor: MyColors.error,
  },
  upgradeTxt: {
    fontFamily: MyFont.medium,
    fontSize: 18,
    color: MyColors.textPrimary,
    marginVertical: 12,
  },
  unlockTxt: {
    fontFamily: MyFont.regular,
    fontSize: 18,
    color: MyColors.textSecondary,
  },
  premiumDetailsArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  billingQues: {
    color: MyColors.textPrimary,
    fontFamily: MyFont.medium,
    fontSize: 16,
    marginBottom: 10,
  },
  billingTxt: {
    textAlign: "center",
    fontFamily: MyFont.regular,
    fontSize: 14,
    color: MyColors.textSecondary,
  },
});

export default PremiumSCreen;
