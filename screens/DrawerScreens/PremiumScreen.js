import { Image, StyleSheet, Text, View } from "react-native";

import MyColors from "./../../util/MyColors";
import MyFont from "./../../util/MyFonts";
import PremiumCard from "../../components/PremiumCard";

function PremiumSCreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBg}>
        <Image source={require("./../../assets/Memoji.png")} />
        <Text style={styles.upgradeTxt}>Upgrade to Premium </Text>
        <Text style={styles.unlockTxt}>
          Unlock all the features with Premium{" "}
        </Text>
      </View>

      <View style={styles.premiumDetailsArea}>
        <PremiumCard />
      </View>

      <View>
        <Text style={styles.billingQues}>When will i be billed?</Text>
      </View>

      <View style={styles.billingTxt}>
        <Text>
          Billing for your subscription will occur automatically according to
          your selected billing cycle, ensuring uninterrupted access to our
          services
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
    fontSize: 16,
    color: MyColors.textSecondary,
  },
  premiumDetailsArea: {
    justifyContent: "center",
    alignItems: "center",
  },
  billingQues: {
    color: MyColors.textPrimary,
    fontFamily: MyFont.medium,
    marginBottom: 10,
  },
  billingTxt: {
    textAlign: "center",
    fontFamily: MyFont.regular,
    color: MyColors.textSecondary,
  },
});

export default PremiumSCreen;
