import { View, Text, StyleSheet } from 'react-native';

import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
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
  title: {
    color: MyColors.textPrimary,
    fontSize: 20,
    marginTop: 20,
    fontFamily: MyFonts.bold,
  }
})