// MyInput.js
import { View, TextInput, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MyColors from "../util/MyColors";

function MyInput({ value, rightIcon, onChangeText, placeholder, secureTextEntry = false, style, icon, fontSize, ...rest }) {
    return (
        <View style={[styles.container, style]}>
            {icon && (
                <Ionicons
                    name={icon}
                    size={20}
                    color={MyColors.textSecondary}
                    style={styles.iconLeft}
                />
            )}
            <TextInput
                style={[styles.input, fontSize]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={MyColors.textSecondary}
                secureTextEntry={secureTextEntry}
                {...rest}
            />
            {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderWidth: 1,
        borderColor: MyColors.border,
        borderRadius: 8,
        backgroundColor: MyColors.surface,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: MyColors.textPrimary,
    },
    icon: {
        marginRight: 8,
    },
});

export default MyInput;