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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import MyColors from "../util/MyColors";
import { FeedData } from "../util/FeedData";
import MyFonts from "../util/MyFonts";
import { size } from "lodash";

const FeedCard = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [savedSkills, setSavedSkills] = useState([]);
  const [isShared, setIsShared] = useState(false);
  const [isCommented, setIsCommented] = useState(false);

  const showToast = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert(msg);
    }
  };

  const toggleSave = (id) => {
    setSavedSkills((prev) => {
      const isSaved = prev.includes(id);
      const updated = isSaved
        ? prev.filter((skillId) => skillId !== id)
        : [...prev, id];

      showToast(isSaved ? "Removed from saved" : "Saved!");
      return updated;
    });
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
        <View style={styles.post}>
          <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
            {item.text}
          </Text>
        </View>
        <View style={styles.tags}>
          {item.tags.map((tag, index) => (
            <Text key={index} style={styles.tagTxt}>
              #{tag.replace(/\s+/g, "")}
            </Text>
          ))}
        </View>
        <View style={styles.recommended}>
          {item.recSkill.map((skill) => {
            const isSaved = savedSkills.includes(skill.id);

            return (
              <View style={styles.recSkills} key={skill.id}>
                <View style={styles.recLeft}>
                  <Text style={styles.skillTxt}>{skill.skill}</Text>
                </View>

                <Pressable
                  style={styles.recRight}
                  onPress={() => toggleSave(skill.id)}
                >
                  <MaterialCommunityIcons
                    name={isSaved ? "bookmark-check" : "bookmark-plus-outline"}
                    size={22}
                    color={
                      isSaved ? MyColors.textPrimary : MyColors.textSecondary
                    }
                  />
                </Pressable>
              </View>
            );
          })}
        </View>
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
  body: {
    padding: 10,
    //backgroundColor: MyColors.highlight,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  post: {},
  tagTxt: {
    fontSize: 14,
    fontFamily: MyFonts.bold,
    marginRight: 6,
    color: MyColors.textPrimary,
  },
  recSkills: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: MyColors.border,
  },
  recLeft: {
    //backgroundColor: MyColors.error,
  },
  text: {
    marginTop: 10,
    fontFamily: MyFonts.regular,
    color: MyColors.textPrimary,
  },
  recommended: {
    flexDirection: "column",
    marginVertical: 10,
  },
  skillTxt: {
    fontFamily: MyFonts.medium,
    color: MyColors.textPrimary,
    fontSize: 14,
    textAlign: "center",
  },
  actions: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    //backgroundColor: MyColors.highlight,
  },
});
