import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import MyColors from '../util/MyColors';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import SessionScreen from '../screens/SessionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet, View } from 'react-native';
import TabIcon from './TabIcon';


const Tab = createBottomTabNavigator();

const withDrawerHeader = (navigation, rightIcons = []) => ({
    headerShown: true,
    title: '',
    headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        backgroundColor: MyColors.background,
    },
    headerLeft: () => (
        <Ionicons
            name="menu"
            size={28}
            color={MyColors.primary}
            style={{ marginLeft: 20 }}
            onPress={() => navigation.openDrawer()}
        />
    ),
    headerRight: () => (
        <View style={styles.headerRight}>
            {rightIcons.map((icon, index) => (
                <Ionicons
                    key={index}
                    name={icon.name}
                    size={24}
                    color={icon.color || MyColors.primary} // fallback color
                    style={{ marginLeft: 15 }}
                    onPress={icon.onPress}
                />
            ))}
        </View>
    )
});


const Tabs = () => {

    return (
        < Tab.Navigator
            screenOptions={({ route }) => ({
                //tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: MyColors.background,
                    borderTopColor: MyColors.border,
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: MyColors.background,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                },
                tabBarActiveTintColor: MyColors.primary,
                tabBarInactiveTintColor: MyColors.textSecondary,
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {
                    position: 'relative',
                    fontSize: 12,
                    marginTop: 22,
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    ...withDrawerHeader(navigation, [
                        {
                            name: 'search',
                            color: MyColors.textSecondary,
                            onPress: () => navigation.navigate('Search')
                        },
                        {
                            name: 'shield-checkmark',
                            color: MyColors.success,
                            onPress: () => navigation.navigate('Premium')
                        },
                    ]),
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            name={focused ? "home" : 'home-outline'}
                            size={30}
                            color={focused ? MyColors.primary : MyColors.textSecondary}
                            style={styles.tabIcon}
                        />
                    )
                })}
            />

            <Tab.Screen
                name='Chat'
                component={ChatScreen}
                options={({ navigation }) => ({
                    ...withDrawerHeader(navigation, [
                        {
                            name: 'search',
                            onPress: () => navigation.navigate('Notifications')
                        },
                    ]),
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            color={focused ? MyColors.primary : MyColors.textSecondary}
                            size={30}
                            name={focused ? "chatbubbles-sharp" : "chatbubbles-outline"}
                            style={styles.tabIcon}
                        />
                    ),
                })}
            />
            <Tab.Screen name='Sessions' component={SessionScreen}
                options={({ navigation }) => ({
                    ...withDrawerHeader(navigation, [
                        {
                            name: 'search',
                            onPress: () => navigation.navigate('Notifications')
                        },
                    ]),
                    tabBarLabel: 'Sessions',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            color={focused ? MyColors.primary : MyColors.textSecondary}
                            size={30}
                            name={focused ? "timer-sharp" : "timer-outline"}
                            style={styles.tabIcon}
                        />
                    ),
                })}

            />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={({ navigation }) => ({
                    ...withDrawerHeader(navigation, [
                        {
                            name: 'search',
                            onPress: () => navigation.navigate('Notifications')
                        },
                    ]),
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            color={focused ? MyColors.primary : MyColors.textSecondary}
                            size={30}
                            name={focused ? "person-sharp" : "person-outline"}
                            style={styles.tabIcon}
                        />
                    ),
                })}
            />
        </Tab.Navigator >

    )
}

const styles = StyleSheet.create({
    headerRight: {
        flexDirection: 'row',
        marginRight: 20,
        //backgroundColor: MyColors.error,
    },
    tabIcon: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 15,
    },
    shadow: {
        shadowColor: MyColors.textSecondary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default Tabs;