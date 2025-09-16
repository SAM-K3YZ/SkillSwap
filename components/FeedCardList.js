import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ToastAndroid, // for Android toast
  Alert,
  Platform, // fallback for iOS
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyColors from "../util/MyColors";
import { FeedData } from "../util/FeedData";
import MyFonts from "../util/MyFonts";

const FeedCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [isCommented, setIsCommented] = useState(false);

  const showToast = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert(msg);
    }
  };

  return (
    <View style={styles.cardContainer}>
      {/* User Info */}
      <View style={styles.user}>
        <View style={styles.userLeft}>
          <Text style={styles.iconText}>{item.icon}</Text>
        </View>
        <View style={styles.userRight}>
          <Text style={styles.user}>{item.user}</Text>
          <Text style={styles.skillset}>{item.skillset}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>{item.text}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        {/* Like */}
        <Pressable
          onPress={() => {
            setIsLiked(!isLiked);
            showToast(isLiked ? "Unliked" : "Liked");
          }}
        >
          <Ionicons
            name={isLiked ? "heart-sharp" : "heart-outline"}
            size={22}
            color={isLiked ? "red" : MyColors.textSecondary}
          />
        </Pressable>

        {/* Save */}
        <Pressable
          onPress={() => {
            setIsSaved(!isSaved);
            showToast(isSaved ? "Removed from saved" : "Saved!");
          }}
        >
          <Ionicons
            name={isSaved ? "bookmark" : "bookmark-outline"}
            size={22}
            color={isSaved ? MyColors.textPrimary : MyColors.textSecondary}
          />
        </Pressable>

        {/* Comment */}
        <Pressable
          onPress={() => {
            setIsCommented(!isCommented);
            showToast("Comment clicked");
          }}
        >
          <Ionicons
            name={isCommented ? "chatbubble" : "chatbubble-outline"}
            size={22}
            color={isCommented ? MyColors.textPrimary : MyColors.textSecondary}
          />
        </Pressable>

        {/* Share */}
        <Pressable
          onPress={() => {
            setIsShared(!isShared);
            showToast("Shared!");
          }}
        >
          <Ionicons
            name="share-outline"
            size={22}
            color={MyColors.textSecondary}
          />
        </Pressable>
      </View>
    </View>
  );
};

// FlatList wrapper
function FeedCardList() {
  return (
    <FlatList
      data={FeedData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FeedCard item={item} />}
      contentContainerStyle={{ padding: 16, gap: 12 }}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default FeedCardList;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: "100%",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: MyColors.textSecondary,
    shadowOffset: { width: 10, height: 5 },
    shadowOpacity: 0.2,
    backgroundColor: MyColors.surface,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    fontWeight: "bold",
    fontSize: 16,
    color: MyColors.textPrimary,
  },
  userLeft: {
    width: 45,
    height: 45,
    padding: 10,
    borderRadius: "100%",
    marginEnd: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: MyColors.textPrimary,
  },
  userRight: {
    width: "70%",
    overflow: "hidden",
    //backgroundColor: MyColors.textSecondary,
  },
  iconText: {
    fontFamily: MyFonts.medium,
    fontSize: 16,
    color: MyColors.surface,
  },
  skillset: {
    fontSize: 14,
    fontFamily: MyFonts.regular,
    color: MyColors.textSecondary,
  },
  text: {
    marginTop: 10,
    fontFamily: MyFonts.regular,
    color: MyColors.textPrimary,
  },
  actions: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    //backgroundColor: MyColors.highlight,
  },
});
