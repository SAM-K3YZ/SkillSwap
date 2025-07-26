import { View, Text, Pressable, StyleSheet, FlatList, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";
import PersonaInput from "../components/PersonaInput";

function ProfessionScreen({ navigation }) {

    const [userData, setUserData] = useState({
        Occupation: '',
        Skills: '',
        Experience: '',
        Location: '',
        WorkLink: '',
    });

    const handleInputChange = (field, value) => {
        setUserData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        console.log(userData); // Do something with the form
        navigation.reset({
            index: 0,
            routes: [{ name: 'MainApp' }],
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Select Your Profession</Text>
                <Text style={styles.description}>Provide your personal details to enhance your Skil Swap experience and connect with like-minded individuals.</Text>
            </View>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >

                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <ScrollView
                        contentContainerStyle={{ padding: 10 }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <PersonaInput
                            title="Occupation"
                            placeholder="e.g. Designer"
                            value={userData?.Occupation || ''}
                            onChangeText={(text) => handleInputChange('Occupation', text)}
                        />

                        <PersonaInput
                            title="Skills"
                            placeholder="e.g. Figma, React Native"
                            value={userData?.Skills || ''}
                            onChangeText={(text) => handleInputChange('Skills', text)}
                        />

                        <PersonaInput
                            title="Experience"
                            placeholder="e.g. 3 years"
                            value={userData?.Experience || ''}
                            onChangeText={(text) => handleInputChange('Experience', text)}
                        />

                        <PersonaInput
                            title="Location"
                            placeholder="e.g. City, State"
                            value={userData?.Location || ''}
                            onChangeText={(text) => handleInputChange('Location', text)}
                        />

                        <PersonaInput
                            title="Work Portfolio Link"
                            placeholder="e.g. https://yourportfolio.com"
                            value={userData?.WorkLink || ''}
                            onChangeText={(text) => handleInputChange('WorkLink', text)}
                        />

                        <View style={styles.uploadPicContainer}>
                            <Pressable
                                style={styles.uploadPic}
                                onPress={() => console.log('Upload Profile Picture')}
                            >
                                <Ionicons name="cloud-upload-outline" size={24} color={MyColors.textSecondary} />
                                <Text style={styles.picTexT}>Upload Profile Picture</Text>
                            </Pressable>
                            <Text style={styles.picDescription}>
                                Please upload a maximum of 2mb image in .jpg or .png format.
                            </Text>
                        </View>

                    </ScrollView>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>

            <Pressable
                style={({ pressed }) => [styles.nextBtn, { opacity: pressed ? 0.5 : 1 }]}
                onPress={handleSubmit}
            >
                <Text style={styles.nextText}>Done</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: MyColors.background,
    },
    title: {
        fontSize: 22,
        fontFamily: MyFonts.semiBold,
        color: MyColors.primary,
        marginBottom: 5,
        marginTop: 50,
    },
    middle: {
        marginTop: 30,
    },
    uploadPic: {
        height: 100,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: MyColors.border,
        borderRadius: 10,
        backgroundColor: MyColors.surface,
    },
    picTexT: {
        fontSize: 16,
        fontFamily: MyFonts.medium,
        color: MyColors.textPrimary,
        marginTop: 10,
    },
    picDescription: {
        fontSize: 14,
        fontFamily: MyFonts.regular,
        color: MyColors.textSecondary,
        textAlign: 'start',
        marginTop: 0,
    },
    nextBtn: {
        marginTop: 30,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: MyColors.primary,
    },
    nextText: {
        fontSize: 18,
        fontFamily: MyFonts.semiBold,
        color: MyColors.surface,
    },
});

export default ProfessionScreen;