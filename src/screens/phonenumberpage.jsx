import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const PhoneNumberScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Text style={styles.backArrow}>←</Text>
  </TouchableOpacity>
          <Text style={styles.headerText}>Verification</Text>
            <View style={styles.rightSpacer} />

        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Enter your phone number</Text>
        </View>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#6B8280"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.button}
            onPress={() => navigation.navigate("PhoneOTP")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  header: {
  flexDirection: 'row',           // 🌟 Arrange items in a row
  alignItems: 'center',           // 🌟 Center them vertically
  justifyContent: 'space-between',// 🌟 Spread out space between
  paddingHorizontal: 16,          // Optional: side padding
  height: 56,                     // Optional: header height
  backgroundColor: '#fffff', 
    paddingBottom: 8,       // Optional: background
},
  backButton: {
  width: 48,
  justifyContent: 'center',
  alignItems: 'center',
},
backArrow: {
  fontSize: 24,
  color: '#121717',
},
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#121717",
  },
  titleContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#121717",
    textAlign: "center",
    lineHeight: 35,
  },
  inputContainer: {
    marginTop: 12,
    marginBottom: 16,
  },
  input: {
    height: 56,
    backgroundColor: "#F2F5F2",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#121717",
  },
  button: {
    height: 48,
    backgroundColor: "#38ABA6",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  footerText: {
    fontSize: 14,
    color: "#6B8280",
    textAlign: "center",
    lineHeight: 21,
  },
});
