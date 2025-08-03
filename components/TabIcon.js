import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ICON_FAMILIES = {
    Ionicons,
    MaterialCommunityIcons,
};

const TabIcon = ({ name, size, color, family = 'Ionicons', style }) => {
    const IconComponent = ICON_FAMILIES[family] || Ionicons;

    return (
        <View style={style}>
            <IconComponent name={name} size={size} color={color} />
        </View>
    );
};

export default TabIcon;