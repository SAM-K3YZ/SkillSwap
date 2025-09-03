<<<<<<< HEAD
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FAB } from 'react-native-elements';

import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";

import { MySessionHistory } from "../util/HomeData";
import SessionHistoryCard from "../components/SessionHistoryCard";

function VideoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Recommended for you</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {MySessionHistory.map((item) => (
            <SessionHistoryCard key={item.id} title={item.title} />
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.headerText}>My Sessions</Text>
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
          {MySessionHistory.map((item) => (
            <SessionHistoryCard key={item.id} title={item.title} />
          ))}
        </ScrollView>
      </View>

      <FAB title="Create" size="small" placement="right" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //height: "100%",
    flex: 1,
    padding: 20,
    backgroundColor: MyColors.background,
  },
  headerText: {
    fontSize: 20,
    fontFamily: MyFonts.medium,
  },
});

export default VideoScreen;
=======
import { Text, View } from "react-native";

function VideoScreen(){
 return(
    <View>
        <Text>Video Screen</Text>
    </View>
 );
}

export default VideoScreen;
>>>>>>> 59d7106318d2e9589ae58a192ea664a693011cb4
