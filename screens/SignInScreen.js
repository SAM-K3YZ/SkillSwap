import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";
import PersonalInput from '../components/PersonaInput';

function SignInScreen({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    function toSignUp() {
        navigation.replace('SignUp')
    }

    function toggleCheck() {
        setIsChecked(prev => !prev);
        console.log("Check box clicked/unclicked...");
    }

    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Pressable
                    onPress={toSignUp}
                >
                    <Ionicons
                        name="chevron-back"
                        style={styles.backIcon}
                    />
                </Pressable>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Hi, Welcome Back!
                        <Ionicons />
                    </Text>
                    <Text style={styles.subHeader}>
                        Hello again, you have been missed!
                    </Text>
                </View>
            </View>

            <View style={styles.inputArea}>
                <PersonalInput
                    title='Email'
                    icon='person'
                    placeholder='Email, phone & username'
                />
                <PersonalInput
                    title='Password'
                    placeholder='Password'
                    icon='lock-closed'
                    secureTextEntry={!showPassword}
                    rightIcon={
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color={MyColors.textSecondary} />
                        </TouchableOpacity>
                    }
                />

                <View style={styles.aboutPassword}>
                    <View style={styles.rp}>
                        <Pressable
                            onPress={toggleCheck}
                        >
                            <Ionicons
                                name={isChecked ? "checkbox" : "square-outline"}
                                style={styles.checkBox}
                            />
                        </Pressable>
                        <Text>
                            Remember Password
                        </Text>
                    </View>
                    <View style={styles.fp}>
                        <Text>
                            Forgot Password?
                        </Text>
                    </View>
                </View>
            </View>


        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: MyColors.background,
    },
    top: {
        width: '100%',
        marginTop: 30,
    },
    header: {
        marginTop: 30,
    },
    backIcon: {
        color: MyColors.highlight,
        fontSize: 24,
    },
    headerText: {
        fontSize: 24,
        fontFamily: MyFonts.medium,
    },
    subHeader: {
        fontSize: 16,
        fontFamily: MyFonts.regular,
    },
    inputArea: {
        //flex: 1,
        marginTop: 30,
    },
    aboutPassword: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rp: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        fontSize: 24,
        marginRight: 5,
    },
    fp: {
        alignItems: 'center',
        color: MyColors.error,
    }
})

export default SignInScreen;