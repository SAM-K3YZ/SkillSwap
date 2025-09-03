import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";
import PersonalInput from '../components/PersonaInput';
import SignInModal from "../components/SignInModal";

function SignInScreen({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    function toSignUp() {
        navigation.replace('SignUp')
    }

    function toggleCheck() {
        setIsChecked(prev => !prev);
        console.log("Check box clicked/unclicked...");
    }

    function toForgetPassword() {
        navigation.replace('ForgotPassword')
        console.log("To forget password screen")
    }

    function toHomePage() {
        navigation.replace('MainApp');
        console.log("Authenticating user...")
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
                        <Text style={{ fontFamily: MyFonts.regular }}>
                            Remember Password
                        </Text>
                    </View>
                    <View style={styles.fp}>
                        <Pressable onPress={toForgetPassword}>
                            {({ pressed }) => (
                                <Text
                                    style={{
                                        color: pressed ? MyColors.highlight : MyColors.error,
                                        fontFamily: MyFonts.medium,
                                    }}
                                >
                                    Forgot Password?
                                </Text>
                            )}
                        </Pressable>
                    </View>

                </View>
                <View>
                    <Pressable
                        onPress={toHomePage}
                        style={({ pressed }) => [styles.toHomePageBtn, { opacity: pressed ? 0.5 : 1 }]}
                    >
                        <Text
                            style={{
                                color: MyColors.surface,
                                fontSize: 18,
                                fontFamily: MyFonts.medium,
                            }}
                        >
                            Sign In
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.socialMediaSection}>
                    <Text style={styles.orText} > or </Text>
                    <View style={styles.socialMediaArea}>
                        <Pressable
                            onPress={() => {
                                setModalVisible(true)
                                console.log('Pressable Clicked...')
                            }}
                        >
                            <Ionicons
                                name="logo-google"
                                size={35}
                            />
                        </Pressable>
                        <Ionicons
                            name="logo-facebook"
                            size={35}
                        />
                        <Ionicons
                            name="logo-apple"
                            size={35}
                        />
                    </View>
                </View>
            </View>
            <SignInModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
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
        justifyContent: 'space-between',
        marginTop: 10,
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
    },
    toHomePageBtn: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        backgroundColor: MyColors.primary,
    },
    orText: {
        justifyContent: 'center',
        fontSize: 16,
        fontFamily: MyFonts.medium,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 25,
    },
    socialMediaArea: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
    }
})

export default SignInScreen;