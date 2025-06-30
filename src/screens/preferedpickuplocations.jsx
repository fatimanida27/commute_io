import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function PreferedPickupLocations({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header */}
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        <Text style={styles.headerText}>Preferred Pickup Locations</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a location"
        />
      </View>

      {/* Saved Locations */}
      <View style={styles.locationRow}>
        <View style={styles.iconPlaceholder} />
        <View style={styles.locationInfo}>
          <Text style={styles.locationTitle}>Home</Text>
          <Text style={styles.locationSubtitle}>123 Elm Street, Anytown</Text>
        </View>
      </View>

      <View style={styles.locationRow}>
        <View style={styles.iconPlaceholder} />
        <View style={styles.locationInfo}>
          <Text style={styles.locationTitle}>Office</Text>
          <Text style={styles.locationSubtitle}>456 Oak Avenue, Anytown</Text>
        </View>
      </View>

      <View style={styles.locationRow}>
        <View style={styles.iconPlaceholder} />
        <View style={styles.locationInfo}>
          <Text style={styles.locationTitle}>University</Text>
          <Text style={styles.locationSubtitle}>789 Pine Road, Anytown</Text>
        </View>
      </View>

      {/* Add New Location Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Location</Text>
      </TouchableOpacity>
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
    fontWeight: '700',
    color: '#121717',
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#F2F5F2',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  iconPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F2F5F2',
    marginRight: 16,
  },
  locationInfo: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#121717',
  },
  locationSubtitle: {
    fontSize: 14,
    color: '#6B8280',
  },
  addButton: {
    backgroundColor: '#38ABA6',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    marginTop: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
