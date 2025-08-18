import { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import { FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons'

import MyColors from '../util/MyColors';
import MyFonts from '../util/MyFonts';

const ProfileOverlay = forwardRef(({ onEdit, onStats, onInterests, onSettings, onHelp, onLogout }, ref) => {
    const [visible, setVisible] = useState(false);

    // Methods exposed to parent via ref
    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
    }));

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.overlayBackground}>
                <View style={styles.overlayContainer}>
                    <Pressable onPress={onEdit}>
                        <View style={styles.row}>
                            <Ionicons
                                name='pencil'
                                size={18}
                                color={MyColors.textPrimary}
                                style={styles.icon}
                            />
                            <Text style={styles.option}>Edit Information</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={onStats}>
                        <View style={styles.row}>
                            <FontAwesome6
                                name='arrow-trend-up'
                                size={18}
                                color={MyColors.textPrimary}
                                style={styles.icon}
                            />
                            <Text style={styles.option}>Statistics</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={onInterests}>
                        <View style={styles.row}>
                            <MaterialIcons
                                name='interests'
                                size={18}
                                color={MyColors.textPrimary}
                                style={styles.icon}
                            />
                            <Text style={styles.option}>Interests</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={onSettings}>
                        <View style={styles.row}>
                            <MaterialIcons
                                name='settings'
                                size={18}
                                color={MyColors.textPrimary}
                                style={styles.icon}
                            />
                            <Text style={styles.option}>Settings</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={onHelp}>
                        <View style={styles.row}>
                            <Ionicons
                                name='help-circle-sharp'
                                size={18}
                                color={MyColors.textPrimary}
                                style={styles.icon}
                            />
                            <Text style={styles.option}>Help</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={onLogout}>
                        <View style={styles.row}>
                            <Ionicons
                                name='exit'
                                size={18}
                                color={MyColors.textPrimary}
                                style={styles.icon}
                            />
                            <Text style={styles.option}>Logout</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => setVisible(false)}><Text style={styles.cancel}>Cancel</Text></Pressable>
                </View>
            </View>
        </Modal>
    );
});

export default ProfileOverlay;

const styles = StyleSheet.create({
    overlayBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    overlayContainer: {
        backgroundColor: MyColors.background,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginEnd: 10,
    },
    option: {
        fontSize: 18,
        paddingVertical: 10,
        fontFamily: MyFonts.medium,
        color: MyColors.textPrimary,
    },
    cancel: {
        fontSize: 18,
        paddingVertical: 10,
        fontFamily: MyFonts.medium,
        color: 'red',
    },
});