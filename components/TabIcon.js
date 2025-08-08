import { View } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ICON_FAMILIES = {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome,
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