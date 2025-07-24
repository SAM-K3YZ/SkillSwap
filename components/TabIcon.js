import Ionicons from '@expo/vector-icons/Ionicons';

function TabIcon({ name, title, color, size, style }) {
    return (
        <Ionicons
            name={name}
            title={title}
            size={size}
            color={color}
            style={style}
        />
    );
}

export default TabIcon;