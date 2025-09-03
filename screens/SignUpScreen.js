import { View, Text, StyleSheet, Pressable, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";
import MyInput from "../components/MyInput";

function SignUpScreen({ navigation, signIn }) {
  const [callingCode, setCallingCode] = useState("234");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Otp' }],
    });
  };

  function toSignIn() {
    navigation.navigate('SignIn')
  }


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.desc}>Create an account and enjoy a world of learning and connections.</Text>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Adjust if needed
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}>

          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.middle}>
              <MyInput style={styles.inputMT} placeholder="First Name" icon='person' />
              <MyInput style={styles.inputMT} placeholder="Last Name" icon='person' />

              <View style={styles.numberInputContainer}>
                <View style={styles.countryCodePicker}>
                  <Picker
                    selectedValue={callingCode}
                    onValueChange={(value) => setCallingCode(value)}
                    style={styles.picker}
                    dropdownIconColor={MyColors.textPrimary}
                  >
                    <Picker.Item label="+234 (NG)" value="234" />
                    <Picker.Item label="+1 (US)" value="1" />
                    <Picker.Item label="+44 (UK)" value="44" />
                    <Picker.Item label="+91 (IN)" value="91" />
                  </Picker>
                </View>

                <MyInput style={styles.phone} placeholder="Phone Number" icon='call' />
              </View>

              <MyInput style={styles.inputMT} placeholder="Email Address" icon='mail' />

              <MyInput
                placeholder="Password"
                secureTextEntry={!showPassword}
                icon="lock-closed"
                style={styles.inputMT}
                rightIcon={
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color={MyColors.textSecondary} />
                  </TouchableOpacity>
                }
              />

              <MyInput
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                icon="lock-closed"
                style={styles.inputMT}
                rightIcon={
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={24} color={MyColors.textSecondary} />
                  </TouchableOpacity>
                }
              />
            </View>
          </ScrollView>

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>

      <View style={styles.bottom}>
        <Pressable
          onPress={handleSignUp}
          style={({ pressed }) => [styles.signUpBtn, { opacity: pressed ? 0.5 : 1 }]}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>

        <View style={styles.toSignIn}>
          <Text style={styles.accountText}>Already have an account?</Text>

          <Pressable onPress={toSignIn} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
            <Text style={styles.signInText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: MyColors.background,
  },

  top: {
    marginTop: 20,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: MyFonts.bold,
    color: MyColors.primary,
  },
  desc: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: MyFonts.regular,
    color: MyColors.textSecondary,
  },
  middle: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  countryCodePicker: {
    width: '45%',
    marginRight: 10,
    borderWidth: 1,
    borderColor: MyColors.border,
    height: 50,
    borderRadius: 5,
    marginRight: '5%',
    backgroundColor: MyColors.surface,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    color: MyColors.textPrimary,
  },
  phone: {
    width: '50%',
  },
  inputMT: {
    marginTop: 20,
  },
  bottom: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontFamily: MyFonts.semiBold,
    fontSize: 20,
    color: MyColors.surface,
  },
  signUpBtn: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MyColors.primary,
  },
  toSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  accountText: {
    fontFamily: MyFonts.regular,
    fontSize: 16,
    color: MyColors.textSecondary,
  },
  signInText: {
    fontFamily: MyFonts.semiBold,
    marginStart: 10,
    fontSize: 16,
    color: MyColors.primary,
  }
});

export default SignUpScreen;