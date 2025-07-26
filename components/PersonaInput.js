import { StyleSheet, Text, View } from "react-native";


import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";
import MyInput from "./MyInput";

function PersonaInput({ title, placeholder, style, ...rest }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title} <Text style={{ color: 'red' }}>*</Text>
            </Text>

            <MyInput
                style={style}
                placeholder={placeholder}
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: MyColors.background,
    },
    title: {
        fontSize: 20,
        fontFamily: MyFonts.medium,
        color: MyColors.textSecondary,
    },
});

export default PersonaInput;