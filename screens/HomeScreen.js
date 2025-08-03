import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Swap, learn, grow</Text>
        <Text style={styles.subHeader}>Hi, World17</Text>
      </View>
      <ScrollView>
        <View style={styles.yourSkillsContainer}>
          <Text style={styles.skillsHeader}>Your Skills</Text>

          <View style={styles.skillsInfo}>

            <View style={styles.offering}>
              <View style={styles.offeringText}>
                <Text style={{ color: MyColors.highlight, fontFamily: MyFonts.medium }} > Offering: </Text>
                <Text>Graphic Design</Text>
              </View>
            </View>

            <View style={styles.learning}>

              <View style={styles.learningText}>
                <Text style={{ color: MyColors.highlight, fontFamily: MyFonts.medium }}>Learning: </Text>
                <Text>Mobile App Dev</Text>
              </View>

              <View style={styles.progressContainer}>
                <View style={[styles.progressFill, { width: '60%' }]} /> {/* 60% progress */}
              </View>

            </View>

          </View>

          <View>
            <View style={styles.editContainer}>
              <Ionicons
                name='add-circle'
                size={32}
                color={MyColors.primary}
              />
            </View>
            <Text>Edit Skills</Text>
          </View>

        </View>

      </ScrollView >
    </View >
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
    fontSize: 24,
    fontFamily: MyFonts.medium,
    color: MyColors.textPrimary,
  },
  subHeader: {
    fontFamily: MyFonts.regular,
    fontSize: 18,
    color: MyColors.textSecondary,
  },
  progressContainer: {
    width: 100,
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
    backgroundColor: MyColors.border,
  },
  progressFill: {
    height: '100%',
    backgroundColor: MyColors.highlight,
  },
  skillsHeader: {
    fontFamily: MyFonts.medium,
    fontSize: 18,
    color: MyColors.textPrimary,
  },
  yourSkillsContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 10,
    borderRadius: 20,
    shadowColor: MyColors.border,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: MyColors.surface,
  },
  skillsInfo: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    //backgroundColor: MyColors.error,
  },
  offering: {
    flexDirection: 'flex-start',
    //backgroundColor: MyColors.border,
  },
  offeringText: {
    alignItems: 'center',
  },
  learning: {
    flexDirection: 'flex-end',
    //backgroundColor: MyColors.highlight,
  },
  learningText: {
    alignItems: 'center',
  },
  editContainer: {
    alignItems: 'center',
    marginTop: 10,
  }
})