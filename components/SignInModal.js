import { Button, Modal, StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import MyColors from "../util/MyColors";
import PersonaInput from "./PersonaInput";
import MyFonts from "../util/MyFonts";

function SignInModal({ visible, onClose }) {

    return (
        <View style={StyleSheet.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.closeBtn}>
                            <Ionicons
                                name="close-circle-outline"
                                size={24}
                                color={MyColors.textPrimary}
                                onPress={onClose}
                            />
                        </View>
                        <PersonaInput
                            title='Email Address'
                            placeholder='Enter your email address..'
                            style={styles.input}
                        />
                        <PersonaInput
                            title='Password'
                            placeholder='Enter password..'
                        />
                        <View style={styles.signInBtn}>
                            <Pressable
                                onPress={onClose}
                            >
                                <Text style={styles.signInBtntext}>
                                    Sign Up
                                </Text>
                                {console.log('Signed in with google...')}
                            </Pressable>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: MyColors.surface,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    closeBtn: {
        position: 'relative',
        width: '100%',
        alignItems: 'flex-end',
        //backgroundColor: MyColors.error,
    },
    modalView: {
        width: '80%',
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: MyColors.surface,
    },
    input: {
        backgroundColor: MyColors.surface,
    },
    signInBtn: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: MyColors.secondary
    },
    signInBtntext: {
        fontSize: 18,
        color: MyColors.surface,
        fontFamily: MyFonts.medium,
    }
});

export default SignInModal;