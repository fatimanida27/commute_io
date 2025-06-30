import React, { useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  // Refs for auto-focusing next inputs
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^[0-9]?$/.test(text)) {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      // Move to next input if filled
      if (text && index < 5) {
        inputs.current[index + 1].focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>One Time Password(OTP)</Text>
        <View style={{ width: 48 }} /> {/* Spacer */}
      </View>

      {/* Instructions */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enter the code</Text>
        <Text style={styles.subtitle}>We sent a verification code to +1-XXX-XXX-XXXX</Text>
      </View>

      {/* Code Inputs */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Resend */}
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend code</Text>
      </TouchableOpacity>

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => {
          const enteredCode = code.join("");
          console.log("Entered code:", enteredCode);
          navigation.navigate('ProfileSetup') 
        }}
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  backButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    fontSize: 24,
    color: "#121717",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#121717",
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#121717",
    lineHeight: 28,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#121717",
    lineHeight: 24,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  codeInput: {
    width: 48,
    height: 56,
    backgroundColor: "#F2F5F2",
    borderRadius: 11,
    textAlign: "center",
    fontSize: 20,
    color: "#121717",
  },
  resendText: {
    textAlign: "center",
    marginTop: 12,
    color: "#6B8280",
    fontSize: 14,
  },
  verifyButton: {
    marginTop: 20,
    marginHorizontal: 16,
    height: 48,
    backgroundColor: "#38ABA6",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  verifyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
