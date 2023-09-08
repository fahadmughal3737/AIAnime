import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingStack from './src/navigations/onboardingStack/onboardingStack';
import PaywallStack from './src/navigations/paywallStack/paywallStack';
import { StatusBar } from 'react-native';
import { COLORS } from './src/utils/colors';
const Stack = createNativeStackNavigator();
const App = () => {
  return (

    <NavigationContainer>
   
      <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
        <Stack.Screen
          name="OnboardingStack"
          component={OnboardingStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaywallStack"
          component={PaywallStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
