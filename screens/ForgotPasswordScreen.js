import { View, Text } from "react-native";

function ForgotPasswordScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.description}>Enter your email to reset your password</Text>
            {/* Add TextInput and Button components here */}
        </View>
    );
}

export default ForgotPasswordScreen;