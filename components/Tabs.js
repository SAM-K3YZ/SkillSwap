import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyColors from '../util/MyColors';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import SessionScreen from '../screens/SessionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet } from 'react-native';
import TabIcon from './TabIcon';


const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        < Tab.Navigator
            screenOptions={{
                //tabBarShowLabel: false,
                headerShown: false,
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
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            color={focused ? MyColors.primary : MyColors.textSecondary}
                            size={30}
                            name="home"
                            style={styles.tabIcon}
                        />
                    ),
                }}
            />
            <Tab.Screen name='Chat' component={ChatScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        color={focused ? MyColors.primary : MyColors.textSecondary}
                        size={30}
                        name={focused ? "chatbubbles-sharp" : "chatbubbles-outline"}
                        style={styles.tabIcon}
                    />
                ),
            }}
            />
            <Tab.Screen name='Sessions' component={SessionScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                        color={focused ? MyColors.primary : MyColors.textSecondary}
                        size={30}
                        name={focused ? "timer-sharp" : "timer-outline"}
                        style={styles.tabIcon}
                    />
                ),
            }}
            
            />
            <Tab.Screen name='Profile' component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            color={focused ? MyColors.primary : MyColors.textSecondary}
                            size={30}
                            name={focused ? "person-sharp" : "person-outline"}
                            style={styles.tabIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator >

    )
}

const styles = StyleSheet.create({
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