import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.rightSide}>
          <Ionicons name="notifications-outline" size={24} color={MyColors.icon} />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: MyColors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginTop: 20,
    paddingBottom: 10,
    borderBottomColor: MyColors.border,
  },
  title: {
    color: MyColors.textPrimary,
    fontSize: 20,
    marginTop: 20,
    fontFamily: MyFonts.bold,
  }
})