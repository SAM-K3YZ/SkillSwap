// components/DrawerItemRow.js
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MyColors from '../util/MyColors';

const ICON_LIBS = {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
};

const DrawerItemRow = ({
  label,
  onPress,
  iconLeft,
  iconLeftType = 'Ionicons',
  iconRight,
  iconRightType = 'Ionicons',
  isPremium = false,
  showDot = false,
  isActive = false,
}) => {
  const LeftIcon = ICON_LIBS[iconLeftType] || Ionicons;
  const RightIcon = ICON_LIBS[iconRightType] || Ionicons;

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#eee' }}
      style={({ pressed }) => [
        styles.container,
        isActive && styles.active,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.leftSection}>
        <LeftIcon name={iconLeft} size={22} color={isActive ? MyColors.primary : '#000'} style={styles.icon} />
        <Text style={[styles.label, isActive && { color: MyColors.primary }]}>{label}</Text>
      </View>

      <View style={styles.rightSection}>
        {showDot && <View style={styles.dot} />}
        {isPremium && (
          <MaterialCommunityIcons
            name="crown"
            size={18}
            color="#FF9F1C"
            style={styles.crown}
          />
        )}
        {iconRight && (
          <RightIcon name={iconRight} size={20} color="gray" />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  pressed: {
    backgroundColor: '#f5f5f5',
  },
  active: {
    backgroundColor: '#f0f8ff',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  crown: {
    marginLeft: 4,
  },
});

export default DrawerItemRow;