import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useState, useRef, useEffect } from "react";
import MyColors from "../util/MyColors";
import MyFonts from "../util/MyFonts";

function OtpScreen({ navigation }) {

  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);


  const [otpState, setOtpState] = useState({ otp1: '', otp2: '', otp3: '', otp4: '' });

  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const handleOtpChange = (text, key, nextRef) => {
    if (/^\d$/.test(text)) {
      setOtpState((prev) => ({ ...prev, [key]: text }));
      nextRef?.current?.focus();
    } else if (text === '') {
      setOtpState((prev) => ({ ...prev, [key]: '' }));
    }
  };

  const handleVerifyOtp = () => {
    const otp = Object.values(otpState).join('');
    console.log("Entered OTP:", otp);

    // Replace stack to prevent going back to OtpScreen
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainApp' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>One Time Password</Text>
        <Text style={styles.description}>
          Enter the one time password sent to your email address.
        </Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={[styles.box, styles.boxFontsize]}
          keyboardType="number-pad"
          maxLength={1}
          value={otpState.otp1}
          onChangeText={(text) => handleOtpChange(text, 'otp1', ref2)}
          autoFocus
        />
        <TextInput
          ref={ref2}
          style={[styles.box, styles.boxFontsize]}
          keyboardType="number-pad"
          maxLength={1}
          value={otpState.otp2}
          onChangeText={(text) => handleOtpChange(text, 'otp2', ref3)}
        />
        <TextInput
          ref={ref3}
          style={[styles.box, styles.boxFontsize]}
          keyboardType="number-pad"
          maxLength={1}
          value={otpState.otp3}
          onChangeText={(text) => handleOtpChange(text, 'otp3', ref4)}
        />
        <TextInput
          ref={ref4}
          style={[styles.box, styles.boxFontsize]}
          keyboardType="number-pad"
          maxLength={1}
          value={otpState.otp4}
          onChangeText={(text) => handleOtpChange(text, 'otp4', null)}
        />
      </View>

      <View style={styles.bottom}>
        {canResend ? (
          <Pressable onPress={() => {
            setTimer(60);
            setCanResend(false);
            console.log('OTP resent');
            // Trigger resend logic here
          }}>
            <Text style={styles.resendOtp}>Resend OTP</Text>
          </Pressable>
        ) : (
          <Text style={styles.timerText}>Resend in {timer}s</Text>
        )}

        <Pressable
          onPress={() => {
            const otp = Object.values(otpState).join('');
            console.log("Entered OTP:", otp);
            navigation.navigate('MainApp', { otp });
          }}
        >
          <Text style={styles.verifyOtp}>Verify OTP</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: MyColors.background,
  },
  top: {
    marginTop: 25,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontFamily: MyFonts.bold,
    color: MyColors.primary,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: MyFonts.regular,
    color: MyColors.textSecondary,
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  box: {
    height: 50,
    width: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: MyColors.border,
    backgroundColor: MyColors.surface,
  },
  boxFontsize: {
    fontSize: 20,
    fontFamily: MyFonts.bold,
    textAlign: 'center',
  },
  bottom: {
    marginTop: 30,
    alignItems: 'center',
  },
  verifyOtp: {
    fontFamily: MyFonts.semiBold,
    fontSize: 20,
    color: MyColors.primary,
  },
  resendOtp: {
    fontFamily: MyFonts.medium,
    fontSize: 16,
    color: MyColors.error,
    marginBottom: 10,
    textAlign: 'right',
  },
  timerText: {
    fontFamily: MyFonts.regular,
    fontSize: 14,
    color: MyColors.textSecondary,
    marginBottom: 10,
  },
});

export default OtpScreen;