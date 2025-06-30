import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/screens/Landingpage';
import phonenumber from './src/screens/phonenumberpage';
import PhoneOTP from './src/screens/PhoneOTP';
import ProfileSetup from './src/screens/ProfileSetup';
import PreferedPickupLocations from './src/screens/preferedpickuplocations';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="PhoneNumber" component={phonenumber} />
        <Stack.Screen name="PhoneOTP" component={PhoneOTP} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
        <Stack.Screen name="PreferedPickupLocations" component={PreferedPickupLocations} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
