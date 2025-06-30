import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';

export default function ProfileSetupScreen({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
    <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Text style={styles.backArrow}>←</Text>
  </TouchableOpacity>
  <Text style={styles.headerTitle}>ProfileSetup</Text>
  <View style={{ width: 48 }} /> {/* Spacer */}
</View>

      {/* Name Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address" />
      </View>

      {/* Gender Input */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Gender</Text>
        <TextInput style={styles.input} placeholder="Enter gender" />
      </View>

      {/* Phone Number */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" keyboardType="phone-pad" />
      </View>

      {/* Profile Picture Upload */}
      <View style={styles.uploadContainer}>
        <Text style={styles.uploadLabel}>Profile Picture</Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload</Text>
        </TouchableOpacity>
      </View>

      {/* Select Mode */}
      <Text style={styles.sectionTitle}>Select Mode</Text>
      <View style={styles.modeContainer}>
        <TouchableOpacity style={styles.modeButton}><Text style={styles.modeButtonText}>Rider</Text></TouchableOpacity>
        <TouchableOpacity style={styles.modeButton}><Text style={styles.modeButtonText}>Driver</Text></TouchableOpacity>
        <TouchableOpacity style={styles.modeButton}><Text style={styles.modeButtonText}>Both</Text></TouchableOpacity>
      </View>

      {/* Vehicle Details */}
      <Text style={styles.sectionTitle}>Vehicle Details</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Make</Text>
        <TextInput style={styles.input} placeholder="Make" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Model</Text>
        <TextInput style={styles.input} placeholder="Model" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Number Plate</Text>
        <TextInput style={styles.input} placeholder="Number Plate" />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Number of Seats</Text>
        <TextInput style={styles.input} placeholder="Number of Seats" keyboardType="numeric" />
      </View>

      {/* AC Switch */}
      <View style={styles.switchRow}>
        <Text style={styles.label}>AC Available</Text>
        <Switch />
      </View>

      {/* Optional */}
      <Text style={styles.sectionTitle}>Optional</Text>
      <TouchableOpacity style={styles.optionalRow}>
        <Text style={styles.optionalText}>Set Daily Schedule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionalRow}
       onPress={() => navigation.navigate('PreferedPickupLocations')}
        >
        <Text style={styles.optionalText}>Preferred Pickup Locations</Text>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

      {/* Terms */}
      <Text style={styles.termsText}>
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    padding: 16,
  },
 header: {
  flexDirection: 'row',           // 🌟 Arrange items in a row
  alignItems: 'center',           // 🌟 Center them vertically
  justifyContent: 'space-between',// 🌟 Spread out space between
  paddingHorizontal: 16,          // Optional: side padding
  height: 56,                     // Optional: header height
  backgroundColor: '#FAFAFA', 
    paddingBottom: 8,       // Optional: background
},

  headerText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#121717',
  },
  headerTitle: {
  fontSize: 18,
  fontWeight: '700', // BOLD TEXT
  color: '#121717',
},
  inputGroup: {
    marginBottom: 12,
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
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#121717',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F2F5F2',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  uploadLabel: {
    fontSize: 16,
    color: '#121717',
  },
  uploadButton: {
    backgroundColor: '#F2F5F2',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121717',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#121717',
    marginTop: 20,
    marginBottom: 8,
  },
  modeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  modeButton: {
    paddingHorizontal: 16,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DEE3E3',
    marginRight: 8,
    marginBottom: 8,
  },
  modeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121717',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
  },
  optionalText: {
    fontSize: 16,
    color: '#121717',
  },
  saveButton: {
    backgroundColor: '#38ABA6',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    marginTop: 16,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  termsText: {
    textAlign: 'center',
    color: '#5E8785',
    fontSize: 14,
    marginVertical: 12,
  },
});
