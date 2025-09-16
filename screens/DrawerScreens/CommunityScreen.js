import { StyleSheet, Text, View } from "react-native";

import MyColors from "./../../util/MyColors";
import FeedCardList from "../../components/FeedCardList";

function CommunityScreen() {
  return (
    <View style={styles.container}>
      <FeedCardList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 100,
    overflow: "hidden",
    backgroundColor: MyColors.background,
  },
});

export default CommunityScreen;
