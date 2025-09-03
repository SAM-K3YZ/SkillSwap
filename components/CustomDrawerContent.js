// CustomDrawerContent.js
import { StyleSheet, Text, View } from 'react-native';
import DrawerItemRow from '../components/DrawerItemRow';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import MyColors from '../util/MyColors';

export const CustomDrawerContent = (props) => {
  const currentRoute = props.state.routeNames[props.state.index];

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>

      <View style={styles.topSection}>
        <DrawerItemRow
          iconLeft="person-outline"
          label="Personal Details"
          onPress={() => props.navigation.navigate('PersonalDetails')}
          isActive={currentRoute === 'PersonalDetails'}
        />

        <DrawerItemRow
          iconLeft="git-network-outline"
          label="Community"
          onPress={() => props.navigation.navigate('Community')}
          iconLeftType="Ionicons"
          isActive={currentRoute === 'Community'}
        />

        <DrawerItemRow
          iconLeft="crown-outline"
          iconLeftType='MaterialCommunityIcons'
          label="Premium"
          onPress={() => props.navigation.navigate('Premium')}
          isActive={currentRoute === 'Premium'}
        />

        <DrawerItemRow
          iconLeft="briefcase-outline"
          label="Time Table"
          onPress={() => props.navigation.navigate('Timetable')}
          showDot
          isActive={currentRoute === 'Timetable'}
        />

        <DrawerItemRow
          iconLeft="time-outline"
          label="History"
          onPress={() => props.navigation.navigate('History')}
          isActive={currentRoute === 'History'}
        />

        <DrawerItemRow
          iconLeft="albums-outline"
          label="Portfolio"
          onPress={() => props.navigation.navigate('Portfolio')}
          isPremium
          isActive={currentRoute === 'Portfolio'}
        />

        <DrawerItemRow
          iconLeft="easel-outline"
          iconLeftType='Ionicons'
          label="Personalise Coaching"
          onPress={() => props.navigation.navigate('Personalise')}
          isPremium
          isActive={currentRoute === 'Personalise'}
        />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.bottomLinks}>Privacy Policy • Terms of Service</Text>
        <View style={styles.bottomTabs}>
          <DrawerItemRow
            iconLeft="easel-outline"
            iconLeftType='Ionicons'
            label="Help and feedback"
            onPress={() => props.navigation.navigate('Personalise')}
            isActive={currentRoute === 'Personalise'}
          />

          <DrawerItemRow
            iconLeft="exit-outline"
            iconLeftType='Ionicons'
            label="Log out"
            onPress={() => props.navigation.navigate('Personalise')}
            isActive={currentRoute === 'Personalise'}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  bottomSection: {
    marginTop: 40,
  },
  bottomTabs: {
    borderTopWidth: 2,
    borderColor: MyColors.textPrimary,
  },
  bottomLinks: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    marginVertical: 15,
  },
})