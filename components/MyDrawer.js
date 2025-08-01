import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen";
import Tabs from "./Tabs";

function MyDrawer() {
    const Drawer = createDrawerNavigator();
    {console.log('Drawer loaded...')}

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="HomeTabs" options={{ drawerLabel: 'Home' }} component={Tabs} />
            <Drawer.Screen name="Details" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;