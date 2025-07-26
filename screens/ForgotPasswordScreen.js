import { View, Text, StyleSheet } from "react-native";
import MyColors from "../util/MyColors";

function ForgotPasswordScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>Enter your email to reset your password</Text>
            {/* Add TextInput and Button components here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: MyColors.background,
    }
})

export default ForgotPasswordScreen;