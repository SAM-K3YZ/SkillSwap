import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import Tabs from "./Tabs";


import CommunityScreen from '../screens/DrawerScreens/CommunityScreen';
import PremiumSCreen from "../screens/DrawerScreens/PremiumScreen";
import TimetableScreen from "../screens/DrawerScreens/TimetableScreen";
import HistoryScreen from "../screens/DrawerScreens/HistoryScreen";
import PortfolioScreen from "../screens/DrawerScreens/PortfolioScreen";
import PersonilseCoachingScreen from "../screens/DrawerScreens/PersonaliseCoachingScreen";
import MyColors from "../util/MyColors";
import { CustomDrawerContent } from "./CustomDrawerContent";


function MyDrawer() {
    const Drawer = createDrawerNavigator();
    { console.log('Drawer loaded...') }

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: MyColors.highlight,
                headerShown: false,
            }}
            drawerContent= {(props) => <CustomDrawerContent {...props}/>}
        >
            <Drawer.Screen
                name="HomeTabs"
                options={{
                    drawerLabel: 'Home'
                }}
                component={Tabs}
            />

            <Drawer.Screen
                name="Details"
                component={ProfileScreen}
                options={{
                    drawerLabel: 'Personal Details',
                }}
            />

            <Drawer.Screen
                name="Community"
                component={CommunityScreen}
                options={{
                    drawerLabel: 'Community',
                }}
            />

            <Drawer.Screen
                name="Premium"
                component={PremiumSCreen}
                options={{
                    drawerLabel: 'Premium',
                }}
            />

            <Drawer.Screen
                name="Timetable"
                component={TimetableScreen}
                options={{
                    drawerLabel: 'Time Table',
                }}
            />

            <Drawer.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    drawerLabel: 'History',
                }}
            />

            <Drawer.Screen
                name="Portfolio"
                component={PortfolioScreen}
                options={{
                    drawerLabel: 'Portfolio',
                }}
            />

            <Drawer.Screen
                name="Personalise"
                component={PersonilseCoachingScreen}
                options={{
                    drawerLabel: 'Personilse Coaching',
                }}
            />
        </Drawer.Navigator>
    );
}

export default MyDrawer;