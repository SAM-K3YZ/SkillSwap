import { useRef, useState } from "react";
<<<<<<< HEAD
import { View, Text, Pressable, StyleSheet, Alert, FlatList } from "react-native";
=======
import { View, Text, ScrollView, Pressable, StyleSheet, Alert, FlatList } from "react-native";
>>>>>>> 59d7106318d2e9589ae58a192ea664a693011cb4
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'


import MyColors from "../util/MyColors";
import TimelineCard from "../components/TimelineCard";
import FollowersCard from "../components/FollowersCard";
import { timelineData, usersData } from "../util/ProfileData";
import ProfileOverlay from "../components/ProfileOverlay";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const overlayRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Grid");

  function back() {
    navigation.goBack();
  }

  //overlay button handlers
  const handleEdit = () => Alert.alert('Edit Information')
  const handleStats = () => Alert.alert('Statictics')
  const handleInterests = () => Alert.alert('Interests')
  const handleSettings = () => Alert.alert('Settings')
  const handleHelp = () => Alert.alert('Help')
  const handleLogout = () => Alert.alert('Logging out...')

  const renderTabContent = () => {
    switch (activeTab) {
      case "Grid":
        return (
          <FlatList
            data={timelineData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TimelineCard {...item} />
            )}
          />
        );
      case "Likes":
        return <Text style={styles.tabContent}>Likes Content Here</Text>;
      case "Followers":
        return (
          <FlatList
            data={usersData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <FollowersCard {...item} />
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={activeTab == 'Grid' ? timelineData : []}
      keyExtractor={(item, index) => index.toString()}
      style={styles.listContainer}
      renderItem={({ item }) => <TimelineCard {...item} />}
      ListHeaderComponent={
        <>
          <View style={styles.container}>
            <View style={styles.topNav}>

              {/* Back Button */}
              <Pressable style={styles.backBtn} onPress={back}>
                <Ionicons name="chevron-back" color={MyColors.textPrimary} size={24} />
              </Pressable>

              {/* Username */}
              <Text style={styles.username}>John Doe</Text>

              {/* Overlay Menu Button */}
              <Pressable
                style={styles.overlayBtn}
                onPress={() => overlayRef.current?.open()}
              >
                <MaterialCommunityIcons
                  name="dots-vertical"
                  color={MyColors.textPrimary}
                  size={24}
                />
              </Pressable>
            </View>


            {/* Profile Header */}
            <View style={styles.profileHeader}>
              <FontAwesome6
                name="circle-user"
                size={100}
                color={MyColors.textSecondary}
              />
              <Text style={styles.username}>@John_Doe</Text>

              <View style={styles.profileStats}>
                <View style={styles.col}>
                  <Text style={styles.colNumber}>7</Text>
                  <Text style={styles.colText}>Sessions</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.colNumber}>28</Text>
                  <Text style={styles.colText}>Followers</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.colNumber}>16</Text>
                  <Text style={styles.colText}>Following</Text>
                </View>
              </View>

              <Text style={styles.aboutText}>
                Hi! I'm John, passionate about branding, conversion optimization, and
                data analytics.
              </Text>
            </View>

            {/* Sticky Tab Bar */}
            <View style={styles.tabBar}>
              <Pressable
                style={[styles.tabItem, activeTab === "Grid" && styles.activeTab]}
                onPress={() => setActiveTab("Grid")}
              >
                <Ionicons
                  name="grid"
                  size={24}
                  color={
                    activeTab === "Grid" ? MyColors.highlight : MyColors.textSecondary
                  }
                />
              </Pressable>

              <Pressable
                style={[styles.tabItem, activeTab === "Likes" && styles.activeTab]}
                onPress={() => setActiveTab("Likes")}
              >
                <Ionicons
                  name="heart-outline"
                  size={24}
                  color={
                    activeTab === "Likes" ? MyColors.highlight : MyColors.textSecondary
                  }
                />
              </Pressable>

              <Pressable
                style={[styles.tabItem, activeTab === "Followers" && styles.activeTab]}
                onPress={() => setActiveTab("Followers")}
              >
                <Ionicons
                  name="people-outline"
                  size={24}
                  color={
                    activeTab === "Followers"
                      ? MyColors.highlight
                      : MyColors.textSecondary
                  }
                />
              </Pressable>
            </View>

            {/* Tab Content */}
            <View>{activeTab !== 'Grid' && renderTabContent()}</View>


          </View>
          {/* Profile Overlay Menu */}
          <ProfileOverlay
            ref={overlayRef}
            onEdit={handleEdit}
            onStats={handleStats}
            onInterest={handleInterests}
            onSettings={handleSettings}
            onHelp={handleHelp}
            onLogout={handleLogout}
          />
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: MyColors.background
  },
  topNav: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  backBtn: {
    padding: 10,
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 15,
    //backgroundColor: MyColors.background,
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 8,
    color: MyColors.textPrimary,
  },
  profileStats: {
    flexDirection: "row",
    marginVertical: 12,
  },
  col: {
    alignItems: "center",
    flex: 1,
  },
  colNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: MyColors.textPrimary,
  },
  colText: {
    fontSize: 12,
    color: MyColors.textSecondary,
  },
  aboutText: {
    paddingHorizontal: 20,
    textAlign: "center",
    color: MyColors.textSecondary,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around", // spread them evenly
    alignItems: "center", // align vertically in center
    backgroundColor: MyColors.background,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.textSecondary,
  },
  tabItem: {
    flex: 1, // make all tabs equal width
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    flexDirection: "row", // ensure icon & text go in a row if needed later
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: MyColors.highlight,
  },
  tabContent: {
    padding: 20,
    color: MyColors.textPrimary,
    backgroundColor: MyColors.background
  },
  listContainer: {
    backgroundColor: MyColors.background
  }
});

export default ProfileScreen;