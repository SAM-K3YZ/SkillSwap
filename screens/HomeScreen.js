import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';
import SearchInput from '../components/SearchInput';
import MyInterestCard from '../components/MyInterestCard';
import SessionHistoryCard from '../components/SessionHistoryCard';
import { MyActivities, MyInterest, MySessionHistory, SaveResources } from '../util/HomeData';
import SaveResourcesCard from '../components/SavedResourcesCard';
import MyActivityCard from '../components/MyActivityCard';

function HomeScreen() {
  return (

    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        <View style={styles.searchArea}>
          <SearchInput />
        </View>

        <View style={styles.content}>
          <View style={styles.SecTitle}>
            <Text style={styles.Title}>My Interest</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              MyInterest.map(item => (
                <MyInterestCard
                  key={item.id}
                  style={styles.myInterestCard}
                  title={item.title}
                  description={item.description}
                />
              ))
            }
          </ScrollView>
        </View>

        <View style={styles.content}>
          <View style={styles.SecTitle}>
            <Text style={styles.Title}>Session History</Text>

            <Pressable style={styles.viewMore} onPress={() => console.log('View more pressed')}>
              <Text style={styles.subTitle}>View more</Text>
              <Ionicons
                name='chevron-forward'
                color={MyColors.textSecondary}
                size={14}
                style={styles.viewMoreIcon}
              />
            </Pressable>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              MySessionHistory.map(item => (
                <SessionHistoryCard
                  key={item.id}
                  title={item.title}
                />
              ))
            }
          </ScrollView>
        </View>

        <View style={styles.content}>
          <View style={styles.SecTitle}>
            <Text style={styles.Title}>Saved resources</Text>

            <Pressable style={styles.viewMore} onPress={() => console.log('View more pressed')}>
              <Text style={styles.subTitle}>View more</Text>
              <Ionicons
                name='chevron-forward'
                color={MyColors.textSecondary}
                size={14}
                style={styles.viewMoreIcon}
              />
            </Pressable>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              SaveResources.map(item => (
                <SaveResourcesCard
                  key={item.id}
                  title={item.title}
                />
              ))
            }
          </ScrollView>
        </View>

        <View style={styles.content}>
          <View style={styles.SecTitle}>
            <Text style={styles.Title}>My network activity</Text>

            <Pressable style={styles.viewMore} onPress={() => console.log('View more pressed')}>
              <Text style={styles.subTitle}>View more</Text>
              <Ionicons
                name='chevron-forward'
                color={MyColors.textSecondary}
                size={14}
                style={styles.viewMoreIcon}
              />
            </Pressable>
          </View>

          <View style={styles.activityCardArea}>
            {
              MyActivities.map(item => (
                <MyActivityCard
                  key={item.id}
                  title={item.user}
                  desc={item.description}
                  time={item.time}
                  alpha={item.alphabet}
                />
              ))
            }
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: MyColors.background,
  },
  scrollContainer: {
    //paddingBottom: 20,
    marginBottom: 100,
    //backgroundColor: MyColors.error
  },
  searchArea: {
    alignItems: 'center',
    marginTop: 15,
  },
  SecTitle: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Title: {
    color: MyColors.textPrimary,
    fontSize: 16,
    fontFamily: MyFonts.medium,
  },
  subTitle: {
    fontFamily: MyFonts.light,
    fontSize: 14,
    alignItems: 'center',
    color: MyColors.textSecondary,
  },
  myInterestCard: {
    //width: '100%',
    //backgroundColor: MyColors.error
  },
  viewMore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewMoreIcon: {
    marginLeft: 4,
  },
  activityCardArea:{
    //backgroundColor: MyColors.border
  }
})